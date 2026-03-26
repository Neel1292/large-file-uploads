import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import apiClient from '../helper/apiClient.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadMe = async () => {
    try {
      const { data } = await apiClient.get('/auth/me');
      if (data?.success) setUser(data.user);
      else setUser(null);
      return true;
    } catch (err) {
      setUser(null);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      login: async ({ email, password }) => {
        const { data } = await apiClient.post('/auth/login', { email, password });
        if (data?.success) {
          await loadMe();
          return true;
        }
        return false;
      },
      signup: async ({ email, password }) => {
        const { data } = await apiClient.post('/auth/signup', { email, password });
        if (data?.success) {
          await loadMe();
          return true;
        }
        return false;
      },
      logout: async () => {
        await apiClient.post('/auth/logout');
        setUser(null);
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

