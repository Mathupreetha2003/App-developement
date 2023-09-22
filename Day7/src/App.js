import logo from './logo.svg';
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
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/cp' element={<Clientprofile/>}/>
        <Route path='/fp' element={<Freelancerprofile/>}/>
        <Route path='/db' element={<Dashboard/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/freelancer" element={<Freelancer/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
