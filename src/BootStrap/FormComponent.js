import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function FormComponent() {
  return (
    <>
    
        <body className='container-fluid'>
            <div className='d-flex justify-content-center align-items-center'>
              <form className='w-25 mt-3 p-2 border border-3 rounded rounded-2 border-primary'>
                <h2>Register User</h2>
                <div className='mb-3'>
                    <label className='form-label' >User Name</label>
                    <div>
                        <input type='text' className='form-control'name='username'></input>
                        {/* <div>
                            <span className='text-danger'>User Name Required</span>
                        </div> */}
                    </div>
                </div>
                <div className='mb-3'>
                    <label  className='form-label'for='password'>Password</label>
                    <div>
                        <input className='form-control'type='password' name='password'></input>
                        {/* <div>
                            <span className='text-danger'>Password Required</span>
                        </div> */}
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Select City</label>
                    <div>
                        <select className='form-select'>
                            <option>Choose Your City</option>
                            <option>Hyderabad</option>
                            <option>Bangalore</option>
                        </select>
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Date Of Birth</label>
                    <div>
                        <input type='date' className='form-control'></input>
                    </div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Select Price Range</label>
                <div>
                    <input type='range' className='form-range'></input>
                </div>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Terms of Service</label>
                    <div><textarea rows='4' disabled className='form-control'>Terms and conditions you have to accept</textarea></div>
                    <div className='form-switch'>
                        <input type='checkbox' checked className='form-check-input'></input><label className='form-check-label'>I Accept</label></div>
                </div>
                <div className='mb-3'>
                    <button className='btn btn-primary w-100'>Register</button>
                </div> 
                
              </form>
            </div>
        </body>
    
    </>
  )
}

export default FormComponent