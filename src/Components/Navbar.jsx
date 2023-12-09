import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div>
       <nav className='navbar navbar-expand-md bg-secondary-subtle'>
        <a href="#" className='navbar-brand fs-4 '>Name</a>
    
       <button className='navbar-toggler me-3' type='button' data-bs-toggle='collapse' data-bs-target='#btn'>
       <i class="fa-sharp fa-regular fa-bars"></i>
       </button>
       <div className='collapse navbar-collapse' id='btn'>
        <ul className='navbar-nav  ms-auto '>
          <li className='nav-item'>
            < Link to='./' className='nav-link mx-3 fs-5'>Home </Link>
          </li>
          <li className='nav-item'>
            <Link to='./Cotactus' className='nav-link  mx-3  fs-5'>Contact Us </Link>       
          </li>
          <li className='nav-item'>
            < Link to='./service' className='nav-link  mx-3  fs-5'>Create blog </Link>
          </li>
          <li className='nav-item'>
            < Link to='./login' className='nav-link  mx-3  fs-5'> Sign In </Link>
          </li>
        </ul>
       </div>
       </nav>
    </div>
  )
}

export default Navbar
