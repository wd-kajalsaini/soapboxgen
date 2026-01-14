import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HiringManagers from './pages/HiringManagers';
import CareerServices from './pages/CareerServices';
import Recruiters from './pages/Recruiters';
import Signup from './pages/Signup';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import './styles.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Admin Route - No Navbar/Footer */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Public Routes with Navbar/Footer */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/hiring-managers" element={<HiringManagers />} />
                  <Route path="/career-services" element={<CareerServices />} />
                  <Route path="/recruiters" element={<Recruiters />} />
                  <Route path="/sign-up" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
