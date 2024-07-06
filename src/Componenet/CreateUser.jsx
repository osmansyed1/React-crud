import React, { useState } from 'react'
import style from "./home.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//! post take two argument where to store(path of json ) ,what to store
//! here we created controlled form by using useState()
//! inside module.css we will take Link as anchor tag a
//! useNavigate()==> to help one component to another componetnt
const CreateUser = () => {
  let [name,setName]=useState("")
  let[salary,setSalary]=useState("")
  let[company,setCompany]=useState("")
  let navigate=useNavigate()
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
            //! to send the data from console to json
            e.preventDefault();
            let payload={
              ename:name,
              esalary:salary,
              ecompany:company
            }
            axios.post("http://localhost:3000/employee",payload)
            .then(()=>{
              console.log("got the data")
            })
            .catch(()=>{
              console.log("error")
            })
            navigate("/user")
            console.log(name,salary,company)
          }
  return (
    <div id={style.myform}>       
            <form action='' className={style.formcontent}>
              <h4> CREATE USER</h4>
                <label htmlFor=''>Name</label>
                <input type='text' value={name} onChange={namedata}/>
                <label htmlFor=''>Company</label>
                <input type='text' value={salary} onChange={saldata}/>
                <label htmlFor=''>Salary</label> 
                <input type='text' value={company} onChange={comdata}/>
                <button onClick={formhandle}>Submit</button>
                </form>     
    </div>
  )
}
export default CreateUser
