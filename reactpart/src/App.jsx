import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Landing from './Components/Landing'
import Home from './Components/Home'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
