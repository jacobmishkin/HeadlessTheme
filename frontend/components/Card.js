import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
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
    const projectRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/projects?_embed?per_page=${limit}`
    );
    const project = await projectRes.json();
    this.setState({
      project,
    });
  }

  render() {
    const {project} = this.state;
    return (
      <section className="projects">
        <h3>Projects</h3>
        {project.map(post => (
          <div className="project" key={post.id}>
            <Link
              href={`/Project?slug=${post.slug}&apiRoute=projects`}
              as={`/Project/${post.slug}`}
            >
              <a>{post.title.rendered}</a>
            </Link>
          </div>
        ))}
      </section>
    );
  }
}
