import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { useSelector } from 'react-redux'
import Createquestionpaper from './Components/Createquestionpaper'
import Createpaperprotect from './ProtectedRoutes/Createpaperprotect'
const App = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route element={<Createpaperprotect/>}>
        <Route path='/create-paper' element={<Createquestionpaper/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
