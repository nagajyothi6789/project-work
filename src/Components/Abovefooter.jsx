import React from 'react'

function Abovefooter() {
  return (
    <div className='  bg-secondary-subtle p-4 '>
      <div className='container'>
        <div className='row border-bottom'>
          <div className='col'>
            <p className='text-start'>Get connected with us on Social networks:</p>
          </div>
          <div className='col text-end fs-5 '>
            <a href="#"> <i  class="fa-brands fa-instagram text-dark m-2"></i></a> <a href="#"> <i class="fa-brands fa-linkedin text-dark m-2"></i></a> <a href="#"> <i class="fa-brands fa-github text-dark m-2"></i></a> <a href="#"> <i class="fa-solid fa-water text-dark  m-2"></i></a>
           </div>
        </div>
      </div>
      <hr/>
    </div>
    
  )
}

export default Abovefooter
