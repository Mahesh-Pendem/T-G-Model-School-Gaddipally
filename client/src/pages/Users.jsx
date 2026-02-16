import { useState, useEffect } from 'react';
import { getUsers } from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data.users || []))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container py-5 text-center">Loading...</div>;
  if (error) return <div className="container py-5 alert alert-danger">{error}</div>;

  return (
    <div className="container py-5">
      <div className="table-responsive shadow rounded">
        <table className="table table-striped table-hover mb-0">
          <thead className="table-success">
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email ID</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr><td colSpan={4} className="text-center">No records found.</td></tr>
            ) : (
              users.map((u, i) => (
                <tr key={i}>
                  <td>{u.uid}</td>
                  <td>{u.uname}</td>
                  <td>{u.emailid}</td>
                  <td>{u.mobilenum}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
