import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div>
       <div className='container mt-5  text-center contactwidth1' >
                <div className='row'>
                    <div className='col'>
                        <div className='card text-center card_height2 cardcolor position-relative'>
                            <div className='row '>
                                <div className='col'>
                                    <h4 className='text-center mt-2 '>Create an Account</h4>
                                    <input type='text' className="rounded backcolor w-75 mt-4 border-0 shadow-lg" placeholder= 'Name'/><br/>

                                    <input type='text' className="rounded backcolor w-75 mt-4 border-0 shadow-lg" placeholder= 'Email...'/><br/>
                                    <input type='number' className="rounded backcolor w-75 mt-4 border-0 shadow-lg" placeholder= 'Number'/><br/>

                                    <input type='text' className=" rounded backcolor w-75  mt-4 border-0" placeholder='Password'/><br/>
                                     <button className= 'butshadow rounded w-75 mt-4 border-0 '>Register</button><br/>
                                     <p className='mt-4 '>Already have an account?<Link to='/login' className=''>Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    </div>
  )
}

export default Register
