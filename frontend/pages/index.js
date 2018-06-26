import React, {Component} from 'react';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper.js';
import {Config} from '../config.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Hero from '../components/Hero.js';
import Card from '../components/Card.js';
import Blog from '../components/Blog.js';

class Index extends Component {
  static async getInitialProps(context) {
    const aboutRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=about-me`
    );
    const about = await aboutRes.json();
    const contactRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=connect`
    );
    const contact = await contactRes.json();
    const blogRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?per_page=1`
    );
    const blog = await blogRes.json();
    return {about, contact, blog};
  }

  render() {
    const {about, contact, blog} = this.props;

    return (
      <Layout {...this.props}>
        <Hero
          tagline="Jacob Mishkin"
          jobTitle="Frontend Developer"
          location="Based in Chicago"
        />
        <Card />
        <About
          title={about.title.rendered}
          content={about.content.rendered}
          image={about.acf.image}
        />
        {blog.map(items => (
          <Blog
            key={items.id}
            title={items.title.rendered}
            content={items.excerpt.rendered}
            image={items.acf.image}
            link={items.slug}
            date={items.date}

          />
        ))}

        <Contact
          image={contact.acf.image}
          tagline="Jacob Mishkin"
          jobTitle="Frontend Developer"
        />
      </Layout>
    );
  }
}

export default PageWrapper(Index);
