import React, {Component} from 'react';
import {Image, SocialIcons, LinkBorder} from '../utilities';

const Contact = ({image, tagline, jobTitle}) => (
  <section className="contact">
    <h2>Let's Connect</h2>
    <div className="contact_wrapper">
      <Image className="contact_image" image={image} alt="Chicago" />
      <h3>{tagline}</h3>
      <h4>{jobTitle}</h4>
      <a className="contact_btn" href="mailto:jacob@jacobmishkin.com">
        contact me
        <LinkBorder />
      </a>
      <SocialIcons />
    </div>
  </section>
);
export default Contact;
