import React, {Component} from 'react';
import Layout from './Layout';
import Image from './Image';

const About = ({title, content, image}) => (
  <section className="about">
    <h2>{title}</h2>
    <div className="content">
      <Image className="bio_image" image={image} alt="Photo Of Jacob Mishkin" />
      <p>{content}</p>
    </div>
    <div className="tags">
      <div className="skills">
        <span className="tag" />
      </div>
    </div>
  </section>
);

export default About;
