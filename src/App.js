
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Departments from "./pages/Departments";
import Patients from "./pages/Patients";
import Appointments from "./pages/Appointments";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='main-content'>
     <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/patients" element={<Patients/>} />
          <Route path="/appointments" element={<Appointments/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
     </Routes>
      </div>
      <Footer/>
    </Router>

    
  );
}

export default App;
