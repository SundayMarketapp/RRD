import React from 'react'

function Navbar() {
  return (
    <>
    <body className='container-fluid'>
      <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <div className='container-fluid'>
            <button className='navbar-toggler' data-bs-toggle="collapse"><span className='navbar-toggler-icon'></span></button>
            <h2 className='navbar-brand'>Amazon</h2>
            <div className='navbar-nav collapse navbar-collapse'>
                <ul className='nav text-white'>
                    <li className='nav-item'><a className='nav-link'></a>HOME</li>
                    <li  className='nav-item'><a className='nav-link'></a>ABOUT</li>
                    <li  className='nav-item'><a className='nav-link'></a>CONTACT</li>
                    <li  className='nav-item'><a className='nav-link'></a>ELECTRONICS</li>
                    <li className='nav-item'> 
                        <div className='input-group'>
                            <input type='text'/><button className='btn btn-warning'>
                        <span className='bi bi-search'></span>
                    </button>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </body>
    </>
  )
}

export default Navbar