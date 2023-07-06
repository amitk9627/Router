import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar />
      <div>
       <h1>Welcome to Home Page</h1>
        <h1>Name : Amit Kumar</h1>
        <a href='https://www.linkedin.com/in/amit-kumar-2666b624b/'>My LinkedIn</a>
        
        <h2>Want to become Full Stack Developer</h2>
        <h3>Trainee in Newton School</h3>
        <h4>Email : ramitgzp56@gmail.com</h4>
        <p>Ph No : 7267033009 , 7860519627</p>
        <ul>
          <h4>Tech Stack </h4>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>CORE JAVA</li>
          <li>Data structure & Algorithms</li>
          <li>Currently learning Node.js & Rest API</li>
          </ul>
      </div>
    </>
  )
}

export default Home
