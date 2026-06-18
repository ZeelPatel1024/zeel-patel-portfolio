"use client";

import React from 'react'
import backgroundToronto from '../images/newnewtoronto.jpg'
import backgroundChicago from '../images/newchicago.jpg'
import backgroundSanFran from '../images/newsanfran.jpg'

import { useEffect, useState } from 'react'

import Header from '../components/homecomp/header'
import Navbar from '../components/navbar'
import './styles/home.css'

const backgrounds = [backgroundToronto.src, backgroundChicago.src, backgroundSanFran.src];

export const Home = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    // Preload all background images to prevent white flash/flicker
    backgrounds.forEach((bg) => {
      const img = new Image();
      img.src = bg;
    });
  }, []);

  useEffect(() => {
    console.log("Setting up background slideshow interval");
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % backgrounds.length;
        console.log(`Slideshow interval fired: prevIndex=${prevIndex}, nextIndex=${nextIndex}`);
        return nextIndex;
      });
    }, 6000);

    return () => {
      console.log("Clearing background slideshow interval");
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='HomePage' style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: 'transparent' }}>
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #01010c 120%), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: index === backgroundIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: -1
          }}
        />
      ))}
      <Navbar></Navbar>
      <Header></Header>
      {/* <img style ={{width: 500, height: 500}} src={cartoonMe}></img> */}

    </div>
  )
}
