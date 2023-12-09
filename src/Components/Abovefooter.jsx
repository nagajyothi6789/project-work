import React from 'react'

function Abovefooter() {
  return (
    <div className='  bg-secondary-subtle p-4 '>
      <div className='container'>
        <div className='row border-bottom'>
          <div className='col'>
            <p className='text-start'>Get connected with us on Social networks:</p>
          </div>
          <div className='col text-end '>
            <i class="fa-brands fa-instagram  m-2"></i>
            <i class="fa-brands fa-linkedin  m-2"></i>
            <i class="fa-brands fa-github  m-2"></i><i class="fa-solid fa-water  m-2"></i>
           </div>
        </div>
      </div>
      <hr/>
    </div>
    
  )
}

export default Abovefooter
