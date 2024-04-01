import React, { useEffect, useState } from 'react'
import LandingPage from './Landing'
import UserProfile from './Userdetails'

const Home = () => {

    const [showlanding,setshowlanding]=useState(0)

    const showlanginpage=()=>{
        setshowlanding(1)
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
        showlanding?<LandingPage/>:<><UserProfile/></>
      }
    </div>
  )
}

export default Home
