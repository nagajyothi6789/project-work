import React from 'react'
// import {Link,outlet} from 'react-router-dom';

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
            <a  href='#' className='nav-link mx-3 fs-5'>Home </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link  mx-3  fs-5'>About</a>         
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link  mx-3  fs-5'>Service</a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link  mx-3  fs-5'> Login</a>
          </li>
        </ul>
       </div>
       </nav>
    </div>
  )
}

export default Navbar
