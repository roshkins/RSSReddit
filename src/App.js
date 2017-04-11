import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="SubredditList">
          <ul>
            {/* List of r/Popular subreddits */}
            <li>r/AskReddit</li>
            <li>r/gadgets</li>
            <li>r/sports</li>
            <li>r/pics</li>
            <li>r/worldnews</li>
            <li>r/gaming</li>
          </ul>
          </div>
          <ol className="Posts">
            <li className="Post">
              <div className="Score">17.1k</div>
              <img alt="thumbnail" className="thumbnail" src="//b.thumbs.redditmedia.com/AwdUKfpVjz_1T7JMPfePIrS34IgEbtvEy_dWlr3bHmE.jpg"></img>
            </li>
          </ol>
      </div>
    );
  }
}

export default App;
