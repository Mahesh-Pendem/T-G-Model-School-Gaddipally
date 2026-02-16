import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      marginTop: '-80px',
      paddingTop: '80px',
    }}>
      <div className="card shadow text-center p-5" style={{ maxWidth: '400px' }}>
        <div className="display-4 text-success mb-3">✔</div>
        <h1 className="h4 text-success">Message Sent Successfully!</h1>
        <p className="text-muted">Your message has been delivered. We&apos;ll get back to you shortly.</p>
        <Link to="/" className="btn btn-success">Go Back to Home</Link>
      </div>
    </div>
  );
}
