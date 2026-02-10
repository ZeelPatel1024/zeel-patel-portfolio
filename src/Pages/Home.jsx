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
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = [backgroundToronto, backgroundChicago, backgroundSanFran];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div className='HomePage' style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: '#01010c' }}>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #01010c 120%), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === backgroundIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      <Navbar></Navbar>
      <Header></Header>
      {/* <img style ={{width: 500, height: 500}} src={cartoonMe}></img> */}

    </div>
  )
}
