import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="SubredditList">
          <h1>Filter Subreddits</h1>
          <ul>
            <li className="Subreddit">r/AskReddit</li>
            <li className="Subreddit">r/gadgets</li>
            <li className="Subreddit">r/sports</li>
            <li className="Subreddit">r/pics</li>
            <li className="Subreddit">r/worldnews</li>
            <li className="Subreddit">r/gaming</li>
          </ul>
          <form>
            <input type="text" placeholder="r/subreddit" />
          </form>

          </div>
          <ol className="Posts">
            <li className="Post">
              <div className="Score">17.1k</div>
              <img alt="thumbnail" className="thumbnail" src="//b.thumbs.redditmedia.com/AwdUKfpVjz_1T7JMPfePIrS34IgEbtvEy_dWlr3bHmE.jpg"></img>
              <div className="SubmissionTime">submitted 4 hours ago</div>
              <div className="Author">by Idkmtbh</div>
              <div className="Subreddit">to r/mildlyinteresting</div>
            </li>
          </ol>
      </div>
    );
  }
}

export default App;
