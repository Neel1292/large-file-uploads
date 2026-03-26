import { useState, useRef } from 'react';
import { Upload, File, CheckCircle, X, ArrowRight, ArrowLeft, AlertCircle } from 'lucide-react';
import { useFiles } from '../context/FileContext';
import { useNavigate } from 'react-router-dom';
import { uploadFileInChunks } from '../helper/fileUpload';
import '../App.css';
import { UPLOAD } from '../helper/constant';
import apiClient from '../helper/apiClient';
import Button from '../components/Button';

const FileUpload = () => {
  const [dragActive, setDragActive] = useState(false);
  const [currentUploads, setCurrentUploads] = useState([]);
  const inputRef = useRef(null);
  const { addFile } = useFiles();
  const navigate = useNavigate();


  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleFileUpload = async (file) => {
    if (file.size > 10485760) {
      alert("File size too large. Maximum is 10 MB.");
      return;
    }
    const id = Math.random().toString(36).substr(2, 9);
    
    const newUpload = {
      id,
      file,
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      progress: 0,
      status: 'uploading', // uploading, completed, error
    };

    setCurrentUploads((prev) => [...prev, newUpload]);

    try {
      // Get signature from backend with file metadata
      const signatureResponse = await apiClient.post(UPLOAD.SIGNATURE, {
        folder: "uploads", // Optional, can be dynamic
        fileName: file.name,
        fileSize: file.size,
        fileType: file.type
      });
      const cloudConfig = signatureResponse.data;

      // Upload file in chunks
      const result = await uploadFileInChunks(file, cloudConfig, (progress) => {
        setCurrentUploads((prev) =>
          prev.map((u) =>
            u.id === id ? { ...u, progress } : u
          )
        );
      });

      // Mark as completed
      setCurrentUploads((prev) =>
        prev.map((u) =>
          u.id === id ? { ...u, progress: 100, status: 'completed', publicId: result.public_id } : u
        )
      );

      // Add to global context
      await addFile({
        id,
        name: file.name,
        size: newUpload.size,
        type: file.type,
        url: result.secure_url,
        publicId: result.public_id,
        date: new Date().toLocaleDateString()
      });

      navigate("/")

    } catch (error) {
      console.error("Upload failed", error);
      if (error?.uploadId) {
        try {
          await apiClient.post(UPLOAD.FAIL.replace(':id', error.uploadId));
        } catch (statusErr) {
          console.warn('Unable to mark upload as failed', statusErr);
        }
      }
      if (error?.response?.status === 401) {
        navigate('/login');
        return;
      }
      setCurrentUploads((prev) =>
        prev.map((u) =>
          u.id === id ? { ...u, status: 'error' } : u
        )
      );
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      Array.from(e.dataTransfer.files).forEach(handleFileUpload);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      Array.from(e.target.files).forEach(handleFileUpload);
    }
    // Clear the input value to allow selecting the same file again
    e.target.value = null;
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <button 
          onClick={() => navigate('/')} 
          className="btn" 
          style={{ marginBottom: '1rem', paddingLeft: 0, color: 'var(--text-secondary)', background: 'transparent' }}
        >
          <ArrowLeft size={20} /> Back to Files
        </button>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center' }}>Upload Files</h1>
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
          Upload documents you want to share with your team.
        </p>

        <div
          className={`upload-zone ${dragActive ? 'active' : ''}`}
          // onDragEnter={handleDrag}
          // onDragLeave={handleDrag}
          // onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
          style={{
            border: `2px dashed ${dragActive ? 'var(--accent)' : 'var(--border)'}`,
            borderRadius: 'var(--radius)',
            padding: '3rem 2rem',
            textAlign: 'center',
            backgroundColor: dragActive ? 'rgba(59, 130, 246, 0.1)' : 'var(--bg-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            position: 'relative'
          }}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          <div style={{ 
            backgroundColor: 'var(--bg-primary)', 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <Upload size={32} color="var(--accent)" />
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>Click to upload or drag and drop</h3>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
        </div>

        {currentUploads.length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Uploading...</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {currentUploads.map((upload) => (
                <div key={upload.id} style={{ 
                  backgroundColor: 'var(--bg-secondary)', 
                  padding: '1rem', 
                  borderRadius: 'var(--radius)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{ 
                    padding: '0.5rem', 
                    backgroundColor: upload.status === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)', 
                    borderRadius: '0.5rem' 
                  }}>
                    {upload.status === 'error' ? (
                        <AlertCircle size={24} color="var(--error)" />
                    ) : (
                        <File size={24} color="var(--accent)" />
                    )}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <span style={{ fontWeight: 500 }}>{upload.name}</span>
                      <span style={{ fontSize: '0.875rem', color: upload.status === 'error' ? 'var(--error)' : 'var(--text-secondary)' }}>
                        {upload.status === 'completed' ? 'Completed' : upload.status === 'error' ? 'Failed' : `${Math.round(upload.progress)}%`}
                      </span>
                    </div>
                    <div style={{ 
                      height: '6px', 
                      backgroundColor: 'var(--bg-primary)', 
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${upload.status === 'error' ? 100 : upload.progress}%`, 
                        backgroundColor: upload.status === 'completed' ? 'var(--success)' : upload.status === 'error' ? 'var(--error)' : 'var(--accent)',
                        transition: 'width 0.2s ease'
                      }} />
                    </div>
                  </div>

                  {upload.status === 'completed' && (
                    <CheckCircle size={20} color="var(--success)" />
                  )}
                  {upload.status === 'error' && (
                    <X size={20} color="var(--error)" style={{cursor: 'pointer'}} onClick={() => {
                        setCurrentUploads(prev => prev.filter(u => u.id !== upload.id))
                    }}/>
                  )}
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
              <Button
                variant="primary"
                bgColor="var(--accent)"
                textColor="#fff"
                onClick={() => navigate('/')}
              >
                View Uploaded Files <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
