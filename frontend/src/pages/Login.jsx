import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from '../components/Button';

const Login = () => {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const redirectTo = searchParams.get('redirect') || '/';

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const ok = await login({ email, password });
      if (ok) navigate(redirectTo, { replace: true });
      else setError('Login failed. Check your email/password.');
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div className="authPage container">
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Login</h1>
      <form onSubmit={onSubmit} className="authForm">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required
        />
        {error ? <div style={{ color: 'var(--error)' }}>{error}</div> : null}
        <Button
          variant="primary"
          bgColor="var(--accent)"
          textColor="#fff"
          type="submit"
          disabled={loading}
          fullWidth
          style={{ textAlign: 'center' }}
        >
          Login
        </Button>
      </form>
      <div className="authActions">
        <Button
          variant="outline"
          textColor="var(--text-secondary)"
          onClick={() => navigate(`/signup?redirect=${encodeURIComponent(redirectTo)}`)}
        >
          Create an account
        </Button>
      </div>
    </div>
  );
};

export default Login;

