import { useEffect } from 'react';
import { useFiles } from '../context/FileContext';
import { useNavigate } from 'react-router-dom';
import { FileText, Plus, Image as ImageIcon } from 'lucide-react';
import { BASE_URL, UPLOAD } from '../helper/constant';
import apiClient from '../helper/apiClient';
import Button from '../components/Button';
import '../App.css';

const FileView = () => {
  const { files, setFiles } = useFiles(); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const { data } = await apiClient.get(UPLOAD.FILES);
      const mappedFiles = data.map(file => ({
        id: file.public_id,
        name: file.filename || file.public_id.split('/').pop(),
        size: (file.bytes / 1024 / 1024).toFixed(2) + ' MB',
        type: file.format,
        url: file.secure_url,
        date: new Date(file.created_at).toLocaleDateString(),
        service: file.service || 'CLOUDINARY'
      }));
      setFiles(mappedFiles);
    } catch (error) {
      if (error?.response?.status === 401) {
        navigate('/login');
        return;
      }
      console.error("Error fetching files:", error);
    }
  };

  const isImage = (type) => ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(type?.toLowerCase());


  return (
    <div className="container">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '2rem' 
      }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>My Files</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage your uploaded documents.</p>
        </div>
        <Button
          variant="primary"
          bgColor="var(--accent)"
          textColor="#fff"
          onClick={() => navigate('/upload')}
        >
          <Plus size={20} /> Upload New
        </Button>
      </div>

      {files.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '4rem', 
          backgroundColor: 'var(--bg-secondary)', 
          borderRadius: 'var(--radius)',
          border: '1px dashed var(--border)'
        }}>
          <div style={{ 
            backgroundColor: 'var(--bg-primary)', 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 1.5rem',
          }}>
            <FileText size={40} color="var(--text-secondary)" />
          </div>
          <h3 style={{ marginBottom: '0.5rem' }}>No files uploaded yet</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Upload files to see them here.
          </p>
          <Button
            variant="outline"
            textColor="var(--text-secondary)"
            onClick={() => navigate('/upload')}
          >
            Go to Upload
          </Button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {files.map((file) => (
            <div key={file.id} style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              borderRadius: 'var(--radius)', 
              overflow: 'hidden',
              border: '1px solid var(--border)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                height: '140px', 
                backgroundColor: '#000', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {isImage(file.type) ? (
                  <img src={file.url} alt={file.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                ) : (
                  <FileText size={48} color="var(--text-secondary)" />
                )}
                
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                  opacity: 0.6
                }} />
              </div>
              
              <div style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ 
                        fontSize: '1rem', 
                        fontWeight: 600, 
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        maxWidth: '80%'
                    }} title={file.name}>
                    {file.name}
                    </h3>
                    {isImage(file.type) ? <ImageIcon size={16} color="var(--text-secondary)" /> : <FileText size={16} color="var(--text-secondary)" />}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span>{file.size}</span>
                  <span style={{ fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', backgroundColor: file.service === 'AWS' ? '#ff9900' : '#3448c5', color: 'white', fontWeight: 'bold' }}>{file.service}</span>
                  <span>{file.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileView;
