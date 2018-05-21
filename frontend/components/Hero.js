import React, {Component} from 'react';

const Hero = ({tagline, jobTitle, location}) => (
  <section className="hero full">
    <div className="container">
      <div className="tagline">
        <h1>{tagline}</h1>
      </div>
      <div className="sub_title">
        <p>{jobTitle}</p>
        <p>{location}</p>
      </div>
    </div>
  </section>
);

export default Hero;
