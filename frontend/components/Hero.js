import React, {Component} from 'react';

const Hero = ({tagline, subTagline}) => (
  <section className="hero full">
    <div className="container">
      <div className="tagline">
        <h1>{tagline}</h1>
      </div>
      <div className="sub_title">
        <p>{subTagline}</p>
      </div>
    </div>
  </section>
);

export default Hero;
