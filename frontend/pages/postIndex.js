import React, {Component} from 'react';
import Layout from '../components/Layout.js';
import PageWrapper from '../components/PageWrapper.js';
import Blog from '../components/Blog.js';
import fetch from 'isomorphic-unfetch';
import {Config} from '../config.js';
import {Image} from '../utilities';

class postIndex extends Component {
  static async getInitialProps(context) {
    const blogRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`);
    const blog = await blogRes.json();

    return {blog};
  }

  render() {
    const {blog} = this.props;
    return (
      <Layout {...this.props}>
        <section className="blog_index">
          <h1>Blog</h1>
          {blog.map(items => (
            <Blog
              key={items.id}
              title={items.title.rendered}
              content={items.excerpt.rendered}
              image={items.acf.image}
              link={items.slug}
              date={items.date}
              id={items.id}
              isHomePage={false}
            />
          ))}
        </section>
      </Layout>
    );
  }
}
export default PageWrapper(postIndex);
