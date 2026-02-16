import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Users from './pages/Users';
import Contact from './pages/Contact';
import ContactForm from './pages/ContactForm';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Vision from './pages/Vision';
import TimeTable from './pages/TimeTable';
import Bonafide from './pages/Bonafide';
import Hallticket from './pages/Hallticket';
import Teachers from './pages/Teachers';
import Success from './pages/Success';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/timetable" element={<TimeTable />} />
        <Route path="/bonafide" element={<Bonafide />} />
        <Route path="/hallticket" element={<Hallticket />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
