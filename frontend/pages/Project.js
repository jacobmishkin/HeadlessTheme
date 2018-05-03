import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import PageWrapper from '../components/PageWrapper.js';
import {Config} from '../config.js';

class Project extends Component {
  static async getInitialProps(context) {
    const {slug, apiRoute} = context.query;
    const res = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
    );
    const post = await res.json();
    return {post};
  }

  render() {
    const {post} = this.props;
    return (
      <Layout {...this.props}>
        <h3>{post.title.rendered}</h3>
      </Layout>
    );
  }
}
export default PageWrapper(Project);
