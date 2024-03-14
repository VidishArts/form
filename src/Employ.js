import React, { useState } from 'react'

import './App.css';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'

const Employ = () => {

  const [state, setState] = useState({

    f_name: '',
    l_name: '',
    email: '',
    mobile_num: '',
    city_name: '',
    comments: ''

  })

  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value })
  }

  const saveData = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3003/employee", state)
      .then((res) => {
        if (res) {
          toast.success("Employee Data Saved Successfully!");
        }


      })

  }



  return (
    <div>

      <div className="container-fluid" >
        <div className="row">
          <div className="col-md-12" style={{ display: 'flex' }} >
            <div className='col-md-4 heading' >
              <h1 className='font1'>Employees</h1>
              <br />
              <h2 className='font2'>Data</h2>
              <br /><h1 className='font3'>Form</h1>
            </div>

            <div>   <Toaster toastOptions={
              {
                style: {
                  backgroundColor: '#a9591746',
                  color: '#fff'
                }
              }
            } /></div>

            <div className='col-md-6 formback' >

              <form >


                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form forms "
                      name='f_name'
                      aria-required
                      onChange={handler}
                      placeholder="First name"


                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form forms"
                      name='l_name'
                      onChange={handler}
                      placeholder="Last name"

                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form forms "
                      name='email'
                      onChange={handler}
                      placeholder="Email ID"

                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form forms"
                      name='mobile_num'
                      onChange={handler}
                      placeholder="Mobile Number"

                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <select id="inputState" class="form forms">
                      <option selected>Choose...</option>
                      <option>Delhi</option>
                      <option>Maharashtra</option>
                      <option>Uttar Pradesh</option>
                    </select>
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form forms"
                      name='city_name'
                      onChange={handler}
                      placeholder="City"

                    />
                  </div>
                </div>

                <div class="form-floating">
                  <textarea style={{ width: '500px' }}
                    class="form forms"
                    name='comments'
                    onChange={handler}
                    placeholder="Leave a comment here"
                    id="floatingTextarea">
                  </textarea>
                </div>


                <button type="button" onClick={saveData} class="btn1 btn btn-primary">Primary</button>


              </form>



            </div>






          </div>
        </div>

      </div>



    </div>
  )
}

export default Employ
