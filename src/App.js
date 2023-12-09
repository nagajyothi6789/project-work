import './App.css'
import Home from './Components/Home';
import Login from './Components/Login';
import Cotactus from './Components/Cotactus'
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path = '/' element={<Home/>}> </Route>
        <Route  path = '/Cotactus' element={<Cotactus/>}> </Route>  
        <Route  path = '/login' element={<Login/>}> </Route>
        <Route  path = '/register' element={<Register/>}> </Route>
        <Route  path = '/Cotactus' element={<Cotactus/>}> </Route>
      </Routes>
      </BrowserRouter>
       
       
         <Footer/>
    </div>
  );
}

export default App;
