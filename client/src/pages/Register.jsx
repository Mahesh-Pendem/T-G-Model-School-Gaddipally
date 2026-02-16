import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register as apiRegister } from '../api';

export default function Register() {
  const [uid, setUid] = useState('');
  const [uname, setUname] = useState('');
  const [emailid, setEmailid] = useState('');
  const [mobilenum, setMobilenum] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await apiRegister(uid.trim(), uname.trim(), emailid.trim(), mobilenum.trim());
      navigate('/login', { state: { message: 'Registration successful! Please login.' } });
    } catch (err) {
      setError(err.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{
      background: 'linear-gradient(to right, #764ba2, #667eea)',
      marginTop: '-80px',
      paddingTop: '80px',
    }}>
      <div className="card shadow-lg border-0 p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '10px' }}>
        <h1 className="text-center text-white mb-4">Registration Form</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-white">User ID (Admission No)</label>
            <input type="text" className="form-control" placeholder="Admission No" value={uid} onChange={(e) => setUid(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">User Name</label>
            <input type="text" className="form-control" placeholder="Full Name" value={uname} onChange={(e) => setUname(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
            <input type="email" className="form-control" placeholder="Email" value={emailid} onChange={(e) => setEmailid(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Mobile</label>
            <input type="text" className="form-control" placeholder="Mobile No" value={mobilenum} onChange={(e) => setMobilenum(e.target.value)} required />
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-success" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
            <button type="reset" className="btn btn-secondary">Reset</button>
          </div>
        </form>
        <p className="text-white mt-3 small">
          <strong>Note:</strong> 1. Student User ID should be the same as your Admission Number.<br />
          2. Teachers can also register using their registration number.
        </p>
        <p className="text-center mt-2">
          <Link to="/login" className="text-white">Already have an account? Login</Link>
        </p>
      </div>
    </div>
  );
}
