import React from 'react'



function Login() {
  return  (
         <div>
             <div className='container mt-5 w-25 text-center' >
                <div className='row'>
                    <div className='col'>
                        <div className='card text-center card_height cardcolor position-relative'>
                            <div className='row '>
                                <div className='col'>
                                    <h4 className='text-center mt-2 '>Login</h4>
                                    <input type='text' className="rounded backcolor w-75 mt-4 border-0 shadow-lg" placeholder='Email...'/><br/>
                                    <input type='text' className=" rounded backcolor w-75  mt-4 border-0" placeholder='Password'/><br/>
                                     <button className= 'butshadow rounded w-75 mt-4 border-0 '>Login</button><br/>
                                     <p className='mt-4 '>Don't have an account?<a href="#" className=''>Register</a></p>
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
