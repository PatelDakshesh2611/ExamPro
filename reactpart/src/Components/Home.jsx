import React, { useEffect, useState } from 'react'
import LandingPage from './Landing'
import Homepart from './Homepart'
import { useSelector } from 'react-redux'
// import '../Styles/scrollbar.css'

const Home = () => {    
    const [showlanding,setshowlanding]=useState(0)
    const showlanginpage=()=>{
        setshowlanding(0)
        setTimeout(() => {
            setshowlanding(0);
        }, 4000);
    }
    useEffect(()=>{
       showlanginpage();
    },[])
  return (
    <div>
      {
        showlanding?<LandingPage/>:<><Homepart/></>
      }
    </div>
  )
}

export default Home
