import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Signup from '../Components/Signup'


const Createpaperprotect = () => {
const userdata=useSelector((state)=>state.signupReducer).data
    const checkUsersLogin=()=>{
        if(Object.keys(userdata).length>0){
            return true
        }else{
            return false
        }
    }
  return (
    <div>
      {checkUsersLogin()?<Outlet/>:<Signup/>}
    </div>
  )
}

export default Createpaperprotect
