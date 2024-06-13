import React from 'react'
import Slider from './Slider';
import Unlock from './Unlock';
import Appliction from './Appliction';
import Landmark from './Landmark.jsx';
import Explore from './Explore.jsx';
import Blog from './Blog.jsx';
import Client from './Client.jsx';




function Homepage() {
  return (
    <>
    <Slider/>
    <Unlock/>
    <Appliction/>
       <Landmark/>    
       {/* <Client></Client>  */}
    
    
   
  
    <Explore/>
    <Blog/>
    </>
  )
}

export default Homepage