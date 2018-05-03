import React, {Component} from 'react';

const divStyle = {
  width: '50%',
};
const imageStyle = {
  maxWidth: '100%',
};

const About = ({title, content, image}) => (
  <section className="about">
    <h2>{title}</h2>
    <div className="content">
      <div className="image" style={divStyle}>
        <img src={image} alt="image" style={imageStyle} />
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
