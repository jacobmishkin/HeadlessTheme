import React, {Component} from 'react';
import Link from 'next/link';
import Layout from './Layout.js';
import fetch from 'isomorphic-unfetch';
import {Config} from '../config';

export default class Projects extends Component {
  state = {
    project: [],
  };

  async componentWillMount() {
    const projectRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/projects`);
    const project = await projectRes.json();
    this.setState({
      project,
    });
  }

  render() {
    const {project} = this.state;
    return (
      <section className="projects">
        <h2>Projects</h2>
        <div className="container project__grid">
          {project.map(post => (
            <div
              className={`project ${post.slug}`}
              key={post.id}
              style={{backgroundImage: 'url(' + post.acf.image + ')'}}
            >
              <Link
                href={`/Project?slug=${post.slug}&apiRoute=projects`}
                as={`/Project/${post.slug}`}
              >
                <a className="project_link">
                  <h3>{post.title.rendered}</h3>
                  {/* <img src={post.acf.image} className="project_image" /> */}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
