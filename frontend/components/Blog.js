import React, {Component, Fragment} from 'react';
import {Config} from '../config.js';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout.js';
export default class Blog extends Component {
  state = {
    blog: [],
  };

  async componentWillMount() {
    const blogRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?per_page=1`);
    const blog = await blogRes.json();
    this.setState({
      blog,
    });
  }

  render() {
    const {blog} = this.state;
    return (
      <section className="blog">
        <h2>blog</h2>
        {blog.map(item => (
          <Fragment>
            <div className="blog_title">
              <Link
                href={`/post?slug=${item.slug}&apiRoute=post`}
                as={`/blog/${item.slug}`}
              >
                <a>
                  <h3>{item.title.rendered}</h3>
                </a>
              </Link>
            </div>
            <div className="blog_content">
              <p>{item.excerpt.rendered}</p>
            </div>
          </Fragment>
        ))}
      </section>
    );
  }
}
