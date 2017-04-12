import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {

  render() {
    return (
      <li className="Post">
        <div className="Score">{this.props.score}</div>
        <img alt="thumbnail" className="Thumbnail" src={this.props.thumbnail}></img>
        <a href={this.props.linkUrl} className="title">{this.props.title}</a>
        <div>
          submitted&nbsp;
          <span className="SubmissionTime">{this.props.submissionTime}</span>
           &nbsp;by&nbsp;
          <span className="Author">{this.props.author}</span>
          &nbsp;to&nbsp;
          <span className="Subreddit">r/{this.props.subreddit}</span>
        </div>
        <div>
          <a className="Comment" href={this.props.commentLink}>Comment</a>
        </div>
      </li>
    );
  }
}

Post.propTypes = {
  score: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  submissionTime: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  subreddit: PropTypes.string.isRequired,
  commentLink: PropTypes.string.isRequired
};

export default Post;
