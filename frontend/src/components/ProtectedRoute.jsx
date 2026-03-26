import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // avoid redirect flicker while auth status loads

  if (!user) {
    const from = location.pathname + location.search;
    const params = new URLSearchParams({ redirect: from });
    return <Navigate to={`/login?${params.toString()}`} replace />;
  }

  return children;
}

