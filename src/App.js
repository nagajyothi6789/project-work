import './App.css'
import Login from './Components/Login';
import Cotactus from './Components/Cotactus'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
// import { createBrowser, Router } from 'react-router-dom';

function App() {
 
  return (
    <div>
         <Navbar/>
         <Login/>
         <Cotactus/>
         <Register/>
         <Footer/>
    </div>
  );
}

export default App;
