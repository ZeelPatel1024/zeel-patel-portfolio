import './Styles/Projects.css'
import React, { useState } from 'react';
import Carousel from '../Components/ProjectsComp/Carousel';

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Projects = () => {

  const items = [
    <div>Item 1</div>,
    <div>Item 2</div>,
    <div>Item 3</div>,
    <div>Item 4</div>,
    <div>Item 5</div>,
    <div>Item 6</div>,
  ];

  return (

    <div id='projects'>
      <h1>My Carousel</h1>
      <Carousel items={items} />
    </div>
  )
}
