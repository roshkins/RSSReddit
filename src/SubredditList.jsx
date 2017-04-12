import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubredditList extends Component {
  render() {
    return (
      <div className="SubredditList">
        <h1>Filter Subreddits</h1>
        <ul className="Subreddits">
          <li className="Subreddit">r/AskReddit</li>
          <li className="Subreddit">r/gadgets</li>
          <li className="Subreddit">r/sports</li>
          <li className="Subreddit">r/pics</li>
          <li className="Subreddit">r/worldnews</li>
          <li className="Subreddit">r/gaming</li>
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
  createSubreddit: PropTypes.func.isRequired,
  deleteSubreddit: PropTypes.func.isRequired,
};

export default SubredditList;
