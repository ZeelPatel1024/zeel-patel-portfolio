import React from 'react'
import backgroundToronto from '../Images/newnewtoronto.jpg'
import backgroundChicago from '../Images/newchicago.jpg'
import backgroundSanFran from '../Images/newsanfran.jpg'
import cartoonMe from '../Images/IMG_0065-removebg-preview.png'
import { useEffect, useState } from 'react'

import Header from '../Components/HomeComp/Header'
import Navbar from '../Components/Navbar'
import './Styles/Home.css'

export const Home = () => {
  const [myBackground, setBackground] = useState(backgroundToronto);

  const backgroundStyle = {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #01010c 120%), url(${myBackground})`,
    backgroundSize: "cover",      // Ensures the image covers the entire div
    backgroundPosition: "center", // Centers the background image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    height: "100vh",               // Full height of the viewport
    width: "100%", 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(randomBackground());
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='HomePage' style={backgroundStyle}>
      {/* <Navbar></Navbar> */}
      <Header></Header>
      {/* <img style ={{width: 500, height: 500}} src={cartoonMe}></img> */}
  
    </div>
  )
}

function randomBackground() {
  const returnBackgrounds = [backgroundToronto,backgroundChicago,backgroundSanFran];
  return returnBackgrounds[Math.floor(Math.random() * returnBackgrounds.length)];
}
