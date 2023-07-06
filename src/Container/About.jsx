import React from 'react'
import Navbar from './Navbar'
const About = () => {
  return (<>
    <Navbar />
    <div>
      <h1>Welcome to About page</h1>
      <h4>Company</h4>
      <p>Welcome to the official LinkedIn page of Ambula!
        We are an app-based healthcare platform that connects patients to the best healthcare providers across India via Unified Health Interface(UHI).
        Our mission is to bridge communication gaps in healthcare delivery and empower individuals to take control of their health.
        With Ambula, you can access top-quality healthcare at your fingertips.
        Trust us to be your partner in building a healthier future.
        Follow us for updates and healthcare tips!</p>
        <h2>My Projects</h2>
        <a href='https://dapper-buttercream-7c91d7.netlify.app/'>TourIndia</a><span>Teck stack :-  React js</span>
        <br />
        <a href="https://willowy-cascaron-c554fa.netlify.app/">Weather App</a><span>Teck stack :-  React js</span>
        <br />
        <a href="https://glittering-douhua-fd2b7b.netlify.app/">Movie Search</a><span>Teck stack :-  HTML CSS JS</span>
    </div>
    </>
  )
}

export default About
