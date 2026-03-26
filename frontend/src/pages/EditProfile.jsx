import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import apiClient from '../helper/apiClient';
import '../App.css';
import Button from '../components/Button';

export default function EditProfile() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  const [tab, setTab] = useState('name'); // 'name' | 'password'
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const currentEmailLabel = useMemo(() => user?.email || '', [user]);

  const submitName = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!name.trim()) {
      setError('Name is required.');
      return;
    }

    try {
      await apiClient.post('/auth/update-name', { name: name.trim() });
      setSuccess('Name updated successfully.');
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to update name.');
    }
  };

  const submitPassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!oldPassword) {
      setError('Old password is required.');
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setError('New password must be at least 6 characters.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password must match.');
      return;
    }

    try {
      await apiClient.post('/auth/update-password', {
        oldPassword,
        newPassword,
      });
      setSuccess('Password updated successfully.');
      // Optional security improvement: logout after password change.
      // navigate('/login');
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to update password.');
    }
  };

  if (loading) return null;
  if (!user) return null;

  return (
    <div className="editProfilePage">
      <div className="editProfileHeader">
        <Button variant="outline" textColor="var(--text-secondary)" onClick={() => navigate('/')}>
          Back
        </Button>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: 6 }}>Edit Profile</h1>
          <p style={{ color: 'var(--text-secondary)' }}>{currentEmailLabel}</p>
        </div>
      </div>

      <div className="editProfileLayout">
        <div className="editProfileSidebar">
          <button
            type="button"
            className={`editProfileSidebarBtn ${tab === 'name' ? 'active' : ''}`}
            onClick={() => {
              setTab('name');
              setError('');
              setSuccess('');
            }}
          >
            Update Name
          </button>
          <button
            type="button"
            className={`editProfileSidebarBtn ${tab === 'password' ? 'active' : ''}`}
            onClick={() => {
              setTab('password');
              setError('');
              setSuccess('');
            }}
          >
            Update Password
          </button>
        </div>

        <div className="editProfileContent">
          {error ? <div className="formMessage formMessageError">{error}</div> : null}
          {success ? <div className="formMessage formMessageSuccess">{success}</div> : null}

          {tab === 'name' && (
            <form onSubmit={submitName} className="editProfileForm">
              <label className="formLabel">New Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
              <Button variant="primary" bgColor="var(--accent)" textColor="#fff" type="submit">
                Save Name
              </Button>
            </form>
          )}

          {tab === 'password' && (
            <form onSubmit={submitPassword} className="editProfileForm">
              <label className="formLabel">Old Password</label>
              <input
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                type="password"
                placeholder="Enter old password"
                required
              />

              <label className="formLabel">New Password</label>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                type="password"
                placeholder="Enter new password"
                required
              />

              <label className="formLabel">Confirm New Password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm new password"
                required
              />

              <Button
                variant="primary"
                bgColor="var(--accent)"
                textColor="#fff"
                type="submit"
              >
                Save Password
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

