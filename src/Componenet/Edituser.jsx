import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
//! useParam used for to fetch the data from url
const Edituser = () => {
  let [name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("");
  let obj=useParams()
  let navigate=useNavigate()
  // console.log(obj);
  useEffect(()=>{
    axios.get(`http://localhost:3000/employee/${obj.xyz}`)
    .then((res)=>{
      // console.log(res.data)
      setName(res.data.ename)
      setSalary(res.data.esalary)
      setCompany(res.data.ecompany)
    })
    .catch(()=>{
      console.log("errorrr")
    })
  },[])

  let namedata=(e)=>{
    setName(e.target.value)
  }
  let saldata=(e)=>{
    setSalary(e.target.value)
  }
  let comdata=(e)=>{
    setCompany(e.target.value)
  }

  let formhandle=(e)=>{
    e.preventDefault()
    let payload={
      ename:name,
      esalary:salary,
      ecompany:company
    }
    axios.put(`http://localhost:3000/employee/${obj.xyz}`,payload)
    .then(()=>{
      console.log("updated")
    })
    .catch(()=>{
      console.log("error")
    })
    navigate('/user')

  }
  return (
    <div    id={style.myform}>
         <form>
            <h4>UPDATE USER</h4>
                <label htmlFor=''>Name</label>
                <input type='text' value={name}  onChange={namedata}/>
                <label htmlFor=''>Company</label>
                <input type='text' value={company} onChange={comdata}/>
                <label htmlFor=''>Salary</label> 
                <input type='text'  value={salary} onChange={saldata}/>
                <button onClick={formhandle}>Submit</button>
                </form>
      
    </div>
  )
}

export default Edituser
