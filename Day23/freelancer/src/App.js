
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Sidebar from './Pages/Sidebar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Clientprofile from './Pages/Clientprofile';
import Freelancerprofile from './Pages/Freelancerprofile';
import Project from './Pages/Project';
import Freelancer from './Pages/Freelancer';
import Dashboard from './Pages/Dashboard';
import AboutUs from './Pages/AboutUs';
import Footer from './Pages/Footer';
import ContactUs from './Pages/ContactUs';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import FAQ from './Pages/FAQ';
import TermsandConditions from './Pages/TermsandConditions';
import Offers from './Pages/Offers';
import Adminlogin from './Pages/Adminlogin';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/cp' element={<Clientprofile/>}/>
        <Route path='/fp' element={<Freelancerprofile/>}/>
        <Route path='/db' element={<Dashboard/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/freelancer" element={<Freelancer/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/terms" element={<TermsandConditions/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/profile" element={<Freelancerprofile/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
