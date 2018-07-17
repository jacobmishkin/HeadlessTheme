import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Config} from '../config';

export default class Projects extends Component {
  state = {
    project: [],
  };

  async componentDidMount() {
    const projectRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/projects`);
    const project = await projectRes.json();
    this.setState({
      project,
    });
  }


  render() {
    const {project} = this.state;
    return (
      <section id="project" className="projects">
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
                <a className="card_link">
                  <h3>{post.title.rendered}</h3>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
