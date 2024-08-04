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

  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(randomBackground());
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='HomePage' style={{ backgroundImage: `url(${myBackground})`, backgroundSize:"cover", backgroundPosition: 'center'}}>
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
