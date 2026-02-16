import { useState } from 'react';

export default function Bonafide() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    add: '',
    name: '',
    fname: '',
    dob: '',
    from: '',
    to: '',
    year1: '',
    year2: '',
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
        <div className="card shadow border-0 p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '10px' }}>
          <h2 className="text-center text-success mb-4">Bonafide Certificate Registration</h2>
          <p className="text-center small text-muted mb-4">Your details have been registered as below.</p>
          <table className="table table-bordered mb-0">
            <tbody>
              <tr><th style={{ width: '40%' }}>Admission Number</th><td>{form.add}</td></tr>
              <tr><th>Name</th><td>{form.name}</td></tr>
              <tr><th>Father&apos;s / Mother&apos;s Name</th><td>{form.fname}</td></tr>
              <tr><th>Date of Birth</th><td>{form.dob}</td></tr>
              <tr><th>From Class</th><td>{form.from}</td></tr>
              <tr><th>To Class</th><td>{form.to}</td></tr>
              <tr><th>Year From</th><td>{form.year1}</td></tr>
              <tr><th>Year To</th><td>{form.year2}</td></tr>
            </tbody>
          </table>
          <p className="small text-muted mt-3 mb-0 text-center">Contact the school office for your certificate.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5 d-flex justify-content-center align-items-center min-vh-50">
      <div className="card shadow border-0 p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '10px' }}>
        <h2 className="text-center mb-4" style={{ color: '#333', fontWeight: 600 }}>Bonafide Certificate Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="admission" className="form-label" style={{ fontWeight: 500, color: '#555' }}>Admission Number:</label>
            <input
              type="text"
              id="admission"
              name="add"
              className="form-control"
              value={form.add}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ fontWeight: 500, color: '#555' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label" style={{ fontWeight: 500, color: '#555' }}>Father&apos;s/Mother&apos;s Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="form-control"
              value={form.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label" style={{ fontWeight: 500, color: '#555' }}>Date of Birth (YYYY-MM-DD):</label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="form-control"
              value={form.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="from" className="form-label" style={{ fontWeight: 500, color: '#555' }}>From Class:</label>
            <input
              type="text"
              id="from"
              name="from"
              className="form-control"
              value={form.from}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="to" className="form-label" style={{ fontWeight: 500, color: '#555' }}>To Class:</label>
            <input
              type="text"
              id="to"
              name="to"
              className="form-control"
              value={form.to}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="year1" className="form-label" style={{ fontWeight: 500, color: '#555' }}>Year From:</label>
            <input
              type="text"
              id="year1"
              name="year1"
              className="form-control"
              placeholder="e.g. 2022"
              value={form.year1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="year2" className="form-label" style={{ fontWeight: 500, color: '#555' }}>Year To:</label>
            <input
              type="text"
              id="year2"
              name="year2"
              className="form-control"
              placeholder="e.g. 2024"
              value={form.year2}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100 py-3" style={{ fontSize: '18px', fontWeight: 600 }}>
            Generate Certificate
          </button>
        </form>
      </div>
    </div>
  );
}
