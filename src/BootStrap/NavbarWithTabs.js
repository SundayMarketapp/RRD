import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function Navbar() {
  return (
    <>
    <body className='container-fluid'>
        <h2>Tab Base Nav</h2>
        <ul className='nav nav-pills '>
            <li className='nav-item ' ><a data-bs-toggle='tab' className='nav-link active' href='#basic'>Basic Details</a></li>
            <li className='nav-item '><a data-bs-toggle='tab'className='nav-link'href='#preview'>Preview</a></li>
            <li className='nav-item'><a data-bs-toggle='tab' className='nav-link'href='#description'>Description</a></li>
        </ul>
        <div className='tab-content'>
            <div className='tab-pane active'>
                <h3>Basic Details</h3>
                <dl>
                    <dt>Name</dt>
                    <dd>Nike Casuals</dd>
                    <dt>Price</dt>
                    <dd>6700.44</dd>
                </dl>
            </div>
            <div className='tab-pane' id='preview'>
                <h3>Preview</h3>
                <img src='./img3.jpg' width='200' height='200'></img>
            </div>
            <div  className='tab-pane'id='description'>
                <h3>Description</h3>
                <p>Something about nike casuals</p>
            </div>
        </div>
    </body>
    </>
  )
}

export default Navbar