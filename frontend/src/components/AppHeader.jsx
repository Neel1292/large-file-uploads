import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfileCircle = ({ label }) => {
  const initial = (label || '?').trim().slice(0, 1).toUpperCase();
  return (
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: '50%',
        backgroundColor: 'rgba(59, 130, 246, 0.15)',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        color: 'var(--text-primary)',
        userSelect: 'none',
      }}
      aria-label="User profile"
    >
      {initial}
    </div>
  );
};

export default function AppHeader() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const label = useMemo(() => {
    if (!user) return '';
    return user.email || user.id || '';
  }, [user]);

  const onLogout = async () => {
    try {
      await logout();
    } finally {
      setOpen(false);
      navigate('/login', { replace: true });
    }
  };

  if (!user) return null;

  return (
    <div className="app-header">
      <div className="app-header__left">
        <div className="app-header__brand">File Upload</div>
      </div>

      <div className="app-header__right">
        <div className="app-header__profile">
          <button
            type="button"
            className="app-header__profileBtn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open profile menu"
          >
            <ProfileCircle label={label} />
          </button>

          {open && (
            <div className="app-header__dropdown">
              <button
                type="button"
                className="app-header__dropdownItem"
                onClick={() => {
                  setOpen(false);
                  navigate('/edit-profile');
                }}
              >
                Edit Profile
              </button>
              <button
                type="button"
                className="app-header__dropdownItem app-header__dropdownItemDanger"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

