import React, {Component, Fragment} from 'react';
import {Config} from '../config.js';
import Link from 'next/link';

const Blog = ({title, content, link}) => (
  <section className="blog">
    <h2>blog</h2>
    <div className="blog_title">
     <Link
        href={`/post?slug=${link}&apiRoute=post`}
        as={`/blog/${link}`}
      >
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
    </div>
    <div className="blog_content">
      <p>{content}</p>
    </div>
  </section>
);
export default Blog;
