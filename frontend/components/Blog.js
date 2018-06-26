import React, {Componen} from 'react';
import {Config} from '../config.js';
import Link from 'next/link';
import {Image, LinkBorder} from '../utilities';
import Moment from 'react-moment';

const Blog = ({title, content, link, image, date}) => (
  <section className="blog">
    <h2>Latest Blog Post</h2>
    <div className="blog_wrapper">
      <div className="blog_title">
        <Link href={`/post?slug=${link}&apiRoute=post`} as={`/blog/${link}`}>
          <a>
            <Image
              className="bio_image"
              image={image}
              alt="WordPress and React"
            />
          </a>
        </Link>
        <div className="date">
          <Moment format="MMMM DD YYYY">{date}</Moment>
        </div>
        <Link href={`/post?slug=${link}&apiRoute=post`} as={`/blog/${link}`}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>
      </div>
      <Link href={`/post?slug=${link}&apiRoute=post`} as={`/blog/${link}`}>
        <a className="btn" href="#">
          View More Posts
          <LinkBorder btnType={'btn_border'} />
        </a>
      </Link>
    </div>
  </section>
);
export default Blog;