import React from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'
//! we have to create folder backend 
const Home = () => {
  return (
    <div id={style.homepage}>
        <Link to="/">Create-User</Link>
        <Link to="/user">User</Link>
    </div>
  )
}
export default Home
