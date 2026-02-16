import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Teachers Details</h2>
      <div className="table-responsive shadow rounded">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Department</th>
              <th>Teacher Name</th>
              <th>Contact Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['History & Political Science', 'B. Veera Babu (Principal)', '', ''],
              ['Telugu', 'S. Venkata Chary', '', ''],
              ['Telugu', 'N. Rama Linga Chary', '', ''],
              ['Telugu', 'P. Naga Lakshmi', '', ''],
              ['Hindi', 'SK. Ramjan Begam', '', ''],
              ['Hindi', 'SK. Nagul Meera', '', ''],
              ['English', 'K. Veeranjaneyulu', '', ''],
              ['English', 'P. Kavitha', '', ''],
              ['English', 'Kiran Desh Pande', '', ''],
              ['Mathematics', 'P. Uma Rani', '', ''],
              ['Mathematics', 'M. Soujanya', '', ''],
              ['Science', 'T. S. Kiranmai', '', ''],
              ['Zoology', 'Patli Chandra', '', ''],
              ['Botany', 'Anitha Rani', '', ''],
              ['Physics', 'Dr. B. Ravinder Nayak', '', ''],
              ['Chemistry', 'L. Dakya Nayak', '', ''],
              ['Economics', 'R. Balu Nayak', '', ''],
              ['System Administration', 'M. Ravi Kumar', '', ''],
              ['Vocational', 'T. Srinu (Agriculture)', '', ''],
              ['Vocational', 'S. Naresh (Multi-Media)', '', ''],
            ].map((row, i) => (
              <tr key={i}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center mt-4">
        <Link to="/contact-form" className="btn btn-primary">Contact Us (Send a message)</Link>
      </p>
    </div>
  );
}
