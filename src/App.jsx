import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Componenet/Home'
import CreateUser from './Componenet/CreateUser'
import User from './Componenet/User'
import Edituser from './Componenet/Edituser'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route element={<CreateUser/>} path='/'>  </Route>
        <Route element={<User/>} path='/user'></Route>
        <Route element={<Edituser/> } path='/edit/:xyz'></Route>
        
        
      </Routes>
      
    </BrowserRouter>
    </div>
  )
}

export default App
//! we have to create back end folder inside projoct then create db.json
//! we have to send the data from ui to db.json 
//! how to connect ==>we have to use json-server==> npm install json-server
//! how to start server we have to use ==>npx json-server Backend/db.json --watch port 5000
//! one port always should be open
//! ui==> oneport/json-server ==> db.json
//! herre two terminal willbe opened in one terminal for npm start second for json server
//! id mendetory inside json
//! after running json-server we have to go Resources and ctrl+click
//! here we are adding a variable inside edit path we have to give ":" otherwise it will take as a path