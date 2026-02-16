import { useState } from 'react';
import { useNavigate, useSearchParams, useLocation, Link } from 'react-router-dom';
import { login } from '../api';

export default function Login() {
  const [uid, setUid] = useState('');
  const [uname, setUname] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const msg = searchParams.get('msg') || location.state?.message || '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const data = await login(uid.trim(), uname.trim());
      if (data.token) localStorage.setItem('token', data.token);
      navigate('/users');
    } catch (err) {
      setError(err.message || 'Invalid credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      marginTop: '-80px',
      paddingTop: '80px',
    }}>
      <div className="card shadow-lg border-0" style={{ width: '350px', borderRadius: '15px' }}>
        <div className="card-body p-4">
          <h2 className="text-center mb-4">Login</h2>
          {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}
          {msg && !error && (
            <div className={location.state?.message ? 'alert alert-success py-2' : 'alert alert-danger py-2'} role="alert">
              {msg}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control rounded-pill mb-3"
              placeholder="Admission No"
              value={uid}
              onChange={(e) => setUid(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control rounded-pill mb-3"
              placeholder="Name"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary w-100 rounded-pill py-2" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <p className="text-center mt-3 mb-0">
            <Link to="/register">Don&apos;t have an account? Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
