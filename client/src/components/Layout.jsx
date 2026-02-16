import { Link, useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <>
      <header style={{
        background: 'linear-gradient(to right, #aa076b, #61045f)',
        color: 'white',
        padding: '10px 0',
      }}>
        <div className="container-fluid text-white py-2">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <img src="/images/logo.jpeg" id="logo1" width="90" height="95" alt="School Logo" style={{ objectFit: 'contain' }} />
            <div className="text-center">
              <h1 className="m-0" style={{ fontSize: '1.8rem' }}>T G Model School and Jr. College Gaddipally</h1>
              <p className="m-0" style={{ fontSize: '1rem' }}>Catering to the Educational Needs of Gifted Rural Youth</p>
            </div>
            <img src="/images/tlogo1.png" id="logo2" width="90" height="95" alt="Telangana Logo" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </header>

      <nav className="navbar navbar-expand-lg navbar-dark" style={{
        background: 'linear-gradient(to right, #007bff, #28a745)',
        position: 'sticky',
        top: 0,
        zIndex: 1020,
      }}>
        <div className="container-fluid">
          <Link className="navbar-brand text-warning fw-bold" to="/">TGMS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
              {token ? (
                <>
                  <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
                  <li className="nav-item"><button className="nav-link text-white btn btn-link text-decoration-none" onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <>
                  <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
                  <li className="nav-item"><Link className="nav-link text-white" to="/register">Register</Link></li>
                </>
              )}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Examination</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/hallticket">Hallticket</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academics</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/bonafide">Study Conduct</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/timetable">Time Table</Link></li>
                  <li><Link className="dropdown-item" to="/vision">Vision and Mission</Link></li>
                  <li><Link className="dropdown-item" to="/about">About TGMS</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="main-content">
        {children}
      </div>

      <footer className="text-center py-3 bg-dark text-light">
        <small>
          Copyright © {new Date().getFullYear()} TGMS. All Rights Reserved.
        </small>
      </footer>
    </>
  );
}
