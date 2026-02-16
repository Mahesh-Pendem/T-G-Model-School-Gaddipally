import { useState } from 'react';

export default function Hallticket() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    add: '',
    name: '',
    class: '',
    section: '',
    roll: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container py-5 d-flex justify-content-center">
        <div className="card shadow border-0 p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '15px' }}>
          <h2 className="text-center text-success mb-4">Hall Ticket Registration</h2>
          <p className="text-center small text-muted mb-4">Your details have been registered as below.</p>
          <table className="table table-bordered mb-0">
            <tbody>
              <tr><th style={{ width: '40%' }}>Admission No</th><td>{form.add}</td></tr>
              <tr><th>Name</th><td>{form.name}</td></tr>
              <tr><th>Class</th><td>{form.class}</td></tr>
              <tr><th>Section</th><td>{form.section}</td></tr>
              <tr><th>Roll No</th><td>{form.roll}</td></tr>
            </tbody>
          </table>
          <p className="small text-muted mt-3 mb-0 text-center">Contact the examination cell / school office for your hall ticket.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-50">
      <div className="card shadow border-0 p-4" style={{ width: '400px', maxWidth: '90%', borderRadius: '15px' }}>
        <h2 className="text-center mb-4" style={{ color: '#333' }}>Register for Hall Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="add" className="form-label" style={{ fontSize: '14px', color: '#555' }}>Admission No:</label>
            <input
              type="text"
              id="add"
              name="add"
              className="form-control"
              placeholder="Enter your Admission No"
              value={form.add}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ fontSize: '14px', color: '#555' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="class" className="form-label" style={{ fontSize: '14px', color: '#555' }}>Class:</label>
            <select id="class" name="class" className="form-select" value={form.class} onChange={handleChange} required>
              <option value="">Select Class</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="1st year">1st year</option>
              <option value="2nd year">2nd year</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="section" className="form-label" style={{ fontSize: '14px', color: '#555' }}>Section:</label>
            <select id="section" name="section" className="form-select" value={form.section} onChange={handleChange} required>
              <option value="">Select Section</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="MPC">MPC</option>
              <option value="BIPC">BIPC</option>
              <option value="CEC">CEC</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="roll" className="form-label" style={{ fontSize: '14px', color: '#555' }}>Roll No:</label>
            <input
              type="text"
              id="roll"
              name="roll"
              className="form-control"
              placeholder="Enter your Roll No"
              value={form.roll}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2">Generate Hall Ticket</button>
        </form>
      </div>
    </div>
  );
}
