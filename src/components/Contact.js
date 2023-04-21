import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
    let location =useLocation();
    console.log(location.state);
    //console.log(location.state.phn);
  return (
    <div>
      <h1>Contact Us on {location.state.phn} </h1>
    </div>
  )
}
