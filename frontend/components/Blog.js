import React, {Component} from 'react';
import {Config} from '../config.js';
import Link from 'next/link';
import {Image, Button} from '../utilities';
import PostTag from './PostTag.js';

const Blog = ({header, title, content, link, image, date, id, isHomePage}) => (
  <section className="blog">
    {header ? <h2>{header}</h2> : null}
    <div className="blog_wrapper">
      <div className="blog_title">
        <Link href={`/post?slug=${link}&apiRoute=post`} as={`/blog/${link}`}>
          <a>
            <Image
              className="bio_image post_image"
              image={image}
              alt="WordPress and React"
            />
          </a>
        </Link>
        <PostTag date={date} id={id} />
        <Link href={`/post?slug=${link}&apiRoute=post`} as={`/blog/${link}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
      </div>
      {
        (isHomePage)
        ? <Button href={`/postIndex`} as={`/blog/`} text="View More Posts" />
        : null
      }

    </div>
  </section>
);
export default Blog;
