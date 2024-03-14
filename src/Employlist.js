import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const Employlist = () => {

  const [state, setState] = useState([])

  const getData = () => {
    axios.get("http://localhost:3003/employee")
      .then((res) => {
        setState(res.data)
      })
  }

  const deleteRecord =(id)=>{
      
    Swal.fire({
        title: "You sure want to delete this "+id+" ?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        background: 'rgb(60 78 89)' ,
        color:'whitesmoke',
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete("http://localhost:3003/employee/"+id)
            .then((res)=>{

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  getData();
          });
        }
      

  })
}

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className="title">Employees List</div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">



            <table className="table table-dark table-sm">
              <thead className="table-dark">
                <tr>

                  <th>I'D</th>
                  <th>Fullname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>City</th>
                  <th>Comments</th>
                  <th>Action</th>

                </tr>
              </thead>

              <tbody>

                {state.map((item, index) =>
                  <tr>

                    <td>{item.id}</td>
                    <td>{item.f_name}</td>
                    <td>{item.l_name}</td>
                    <td>{item.email}</td>
                    <td>{item.mobile_num}</td>
                    <td>{item.city_name}</td>
                    <td>{item.comments}</td>
                    <td>
                      <Link className='btn btn-success' to={`/update/${item.id}`}  >Update</Link>
                       &nbsp;  &nbsp;
                      <a href="javascript:void(0)" className='btn btn-danger' onClick={()=>{deleteRecord(item.id)}}>delete</a>
                    </td>

                  </tr>
                )
                }

              </tbody>
            </table>





          </div>
        </div>
      </div>




    </>
  )
}

export default Employlist
