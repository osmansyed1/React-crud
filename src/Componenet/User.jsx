import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
//! for printing ui we have to use useEffect
//! here user id is avilable
//! jsx does not support bcak tick we have to give it js expression{}
const User = () => {
  let[emp,setEmp]=useState([])


   useEffect(()=>{
    axios.get("http://localhost:3000/employee")
    .then((res)=>{
      
      setEmp(res.data)
    })
    .catch(()=>{
      console.log("errroeeerrr")
    })

   },[])
   //! for delete
   let deleteuser=(x)=>{
    axios.delete(`http://localhost:3000/employee/${x}`)
    .then(()=>{
      console.log("deleted")
    })
    .catch(()=>console.log("errror"))
    window.location.assign("/user")  //! it is dom method after deleting it will refresh same page
   }
  return (
       
    <div id={style.userhome}>
    
    {
      emp.map((e)=>{
      
return(
  <div >
    <table>
      <tr>
        <th colSpan="2">Employee {e.id}</th>

      </tr>
      <tr>
        <td>Name</td>
        <td>{e.ename}</td>
      </tr>
      <tr>
        <td>Salary</td>
        <td>{e.esalary}</td>
      </tr>
      <tr>
        <td>
          Company
        </td>
        <td>
          {e.ecompany}
        </td>
      </tr>
      <tr>
        <td>
      <button><Link to={`/edit/${e.id}`}>Edit</Link></button>
        </td>
        <td>
          <button onClick={()=>{deleteuser(e.id)}}>Delete</button>
        </td>
      </tr>
      
    </table>

    

  </div>
)
      })
    }
      
    </div>
  )
}

export default User
