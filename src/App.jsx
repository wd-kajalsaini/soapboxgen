import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HiringManagers from './pages/HiringManagers';
import CareerServices from './pages/CareerServices';
import Recruiters from './pages/Recruiters';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './styles.css';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
