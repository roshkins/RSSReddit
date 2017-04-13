import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubredditList extends Component {
  render() {
    return (
      <div className="SubredditList">
        <h1>Filter Subreddits</h1>
        <ul className="Subreddits">
          {this.props.initialSubreddits.map((subreddit, index) => {
            return (<li key={index} className="Subreddit">r/{subreddit}</li>);
          })}
          <li>
            <form>
              <input type="text" placeholder="r/subreddit" />
            </form>
          </li>
        </ul>

      </div>
    );
  }
}

SubredditList.propTypes = {
  initialSubreddits: PropTypes.arrayOf(PropTypes.string),
  createSubreddit: PropTypes.func.isRequired,
  deleteSubreddit: PropTypes.func.isRequired,
};

export default SubredditList;
