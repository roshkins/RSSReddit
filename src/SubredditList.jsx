import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SubredditList extends Component {
  constructor(props) {
    super(props);
    this.deleteSubreddit = this.deleteSubreddit.bind(this);
    this.createSubreddit = this.createSubreddit.bind(this);
  }

  deleteSubreddit(index) {
    this.props.deleteSubreddit(index);
  }

  createSubreddit(e){
    e.preventDefault();
    const subredditEntry = document.getElementById('subredditEntry');
    this.props.createSubreddit(
      subredditEntry.value
    );
  }

  render() {
    return (
      <div className="SubredditList">
        <h1>Filter Subreddits</h1>
        <ul className="Subreddits">
          {this.props.initialSubreddits.map((subreddit, index) => {
            return (
              <li
                key={index}
                className="Subreddit"
                onClick={this.deleteSubreddit.bind(this, index)}
                >r/{subreddit}</li>
            );
          })}
          <li className="Subreddit">
            <form onSubmit={this.createSubreddit}>
              <label htmlFor="subredditEntry">r/</label>
              <input type="text" id="subredditEntry"
                placeholder="subreddit (hit enter)" />
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
