import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';


const Head = () => {
  return (
    <div>
   

    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link " style={{fontFamily:'monospace', fontSize:'20px'}} aria-current="page" to="employ">
      Employees Form
    </Link>
  </li>
  <li className="nav-item ">
    <Link className="nav-link " style={{fontFamily:'monospace',fontSize:'20px'}} to="employlist">
      Employees List
    </Link>
  </li>
 
 
</ul>

      
   
    </div>
  )
}

export default Head
