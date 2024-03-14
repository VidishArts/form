import React, { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'


const Update = () => {

  const [state, setState] = useState({

    f_name: '',
    l_name: '',
    email: '',
    mobile_num: '',
    city_name: '',
    comments: ''

  })

  const parms = useParams();
  useEffect(() => {
    axios.get("http://localhost:3003/employee/" + parms.id)
      .then((res) => {

        setState(res.data)

      })
  }, [])



  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value })
  }

  const saveData = (event) => {
    event.preventDefault();
    axios.put("http://localhost:3003/employee/"+parms.id, state)
      .then((res) => {
        if (res) {
          toast.success("Employee Data Updated Successfully!");
        }


      })


  

  }
  return (
    <>
      <div className="title">Update Form</div>

      <div>   <Toaster toastOptions={
        {
          style: {
            backgroundColor: '#a9591746',
            color: '#fff'
          }
        }
      } /></div>

      <div className='col-md-6 updateform' >
        <form >


          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form updatedform "
                name='f_name'
                onChange={handler}
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form updatedform"
                name='l_name'
                onChange={handler}
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form updatedform "
                name='email'
                onChange={handler}
                placeholder="Email ID"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form updatedform"
                name='mobile_num'
                onChange={handler}
                placeholder="Mobile Number"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <select id="inputState" class="form updatedform">
                <option selected>Choose...</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Uttar Pradesh</option>
              </select>
            </div>
            <div className="col">
              <input
                type="text"
                className="form updatedform"
                name='city_name'
                onChange={handler}
                placeholder="City"
                aria-label="Last name"
              />
            </div>
          </div>

          <div class="form-floating">
            <textarea style={{ width: '500px' }}
              class="form updatedform"
              name='comments'
              onChange={handler}
              placeholder="Leave a comment here"
              id="floatingTextarea">
            </textarea>
          </div>


          <button type="button" onClick={saveData} class="btn1 btn btn-primary">Update</button>


        </form>



      </div>
    </>
  )
}

export default Update
