import React, {Component} from 'react';
import Moment from 'react-moment';
import {Config} from '../config.js';

class Meta extends Component {
  state = {
    postTag: [],
  };

  async componentWillMount() {
    const postTagRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/tags?post=${this.props.id}`
    );
    const postTag = await postTagRes.json();
    this.setState({
      postTag,
    });
  }

  render() {
    const postTag = this.state;
    console.log(postTag);
    return (
      <div className="postTags">
        {postTag.postTag.map((skills, index) => (
          <span className="skill" key={index}>
            {skills.name}
          </span>
        ))}

        <div>
          <div className="date">
            <Moment format="MMMM DD YYYY">{this.props.date}</Moment>
          </div>
        </div>
      </div>
    );
  }
}

export default Meta;
