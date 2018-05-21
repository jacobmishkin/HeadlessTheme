import React, {Component} from 'react';
import Link from 'next/link';
import Layout from './Layout.js';
import Image from './Image.js';
import fetch from 'isomorphic-unfetch';
import {Config} from '../config';

export default class Projects extends Component {
  static defaultProps = {
    limit: 1,
  };

  state = {
    project: [],
  };

  async componentWillMount() {
    const {limit} = this.props;
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
        {project.map(post => (
          <div className="project" key={post.id}>
            <Link
              href={`/Project?slug=${post.slug}&apiRoute=projects`}
              as={`/Project/${post.slug}`}
            >
              <a>
                {post.title.rendered}
                <Image image={post.acf.image} />
              </a>
            </Link>
          </div>
        ))}
      </section>
    );
  }
}
