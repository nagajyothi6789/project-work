import React from 'react'
import { Link } from 'react-router-dom'
// import Register from './Register'
// import {BrowserRouter,Routes,Route } from 'react-router-dom';



function Login() {
  return  (
         <div>
             <div className='container mt-5  text-center  contactwidth1' >
                <div className='row'>
                    <div className='col'>
                        <div className='card text-center cardcolor position-relative  p-5'>
                            <div className='row '>
                                <div className='col'>
                                    <h4 className='text-center mt-2 '>Login</h4>
                                    <input type='text' className="rounded backcolor w-100 mt-4 border-0 shadow-lg" placeholder='Email...'/><br/>
                                    <input type='text' className=" rounded backcolor w-100 mt-4 border-0" placeholder='Password'/><br/>
                                     <button className= 'butshadow rounded w-100 mt-4 border-0 '>Login</button><br/>
                                     <p className='mt-4 '>Don't have an account?<Link to='/register' className=''>Register</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           
               
         </div>
    )
}

export default Login
