import React, {Component} from 'react';
import Layout from './Layout';
import Image from './Image';

const About = ({title, content, image}) => (
  <section className="about">
    <h2>{title}</h2>
    <div className="about_container">
      <Image className="bio_image" image={image} alt="Photo Of Jacob Mishkin" />
      <div className="about_content">
        <p>{content}</p>
      </div>
    </div>
    <div className="tags">
        <span className="tag" />
      </div>
  </section>
);

export default About;
