import React, {Component} from 'react';
import Layout from './Layout';

const About = ({title, content, image}) => (
    <section className="about">
      <h2>{title}</h2>
      <div className="content">
        <div className="bio_image">
          <img src={image} alt="A Photo of Jacob Mishkin" />
          <p>{content}</p>
        </div>
      </div>
      <div className="tags">
        <div className="skills">
          <span className="tag" />
        </div>
      </div>
    </section>
);

export default About;
