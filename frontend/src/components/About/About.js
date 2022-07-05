import React from 'react'
import Tags from './Tags';

function About() {
  return (<div className="about">
    <h2>About Us</h2>
    <h3>We are a second-generation family business established in 1972</h3>
    <Tags/>
    <div className="about__photo"/>
    <div className="about__delivery">
      Deliver Pizza by
      <img alt="delivery club"src='/delivery.png'/>
    </div>
  </div>
  );
}

export default About;