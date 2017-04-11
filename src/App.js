import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <ol className="Posts">
          <li className="Post">
            <div className="Score">17.1k</div>
            <img alt="thumbnail" className="Thumbnail" src="//b.thumbs.redditmedia.com/AwdUKfpVjz_1T7JMPfePIrS34IgEbtvEy_dWlr3bHmE.jpg"></img>
            <a href="#" className="title">An entire DLSR camera, disassembled.</a>
            <div>
              submitted&nbsp;
              <span className="SubmissionTime">4 hours ago</span>
               &nbsp;by&nbsp;
              <span className="Author">Idkmtbh</span>
              &nbsp;to&nbsp;
              <span className="Subreddit">r/mildlyinteresting</span>
            </div>
            <div>
              <a className="Comment" href="#">Comment</a>
            </div>
          </li>
          <li className="Post">
            <div className="Score">17.1k</div>
            <img alt="thumbnail" className="Thumbnail" src="//b.thumbs.redditmedia.com/AwdUKfpVjz_1T7JMPfePIrS34IgEbtvEy_dWlr3bHmE.jpg"></img>
            <a href="#" className="title">An entire DLSR camera, disassembled.</a>
            <div>
              submitted&nbsp;
              <span className="SubmissionTime">4 hours ago</span>
               &nbsp;by&nbsp;
              <span className="Author">Idkmtbh</span>
              &nbsp;to&nbsp;
              <span className="Subreddit">r/mildlyinteresting</span>
            </div>
            <div>
              <a className="Comment" href="#">Comment</a>
            </div>
          </li>
          <li className="Post">
            <div className="Score">17.1k</div>
            <img alt="thumbnail" className="Thumbnail" src="//b.thumbs.redditmedia.com/AwdUKfpVjz_1T7JMPfePIrS34IgEbtvEy_dWlr3bHmE.jpg"></img>
            <div className="Info">
            <a href="#" className="title">An entire DLSR camera, disassembled.</a>
              submitted&nbsp;
              <span className="SubmissionTime">4 hours ago</span>
               &nbsp;by&nbsp;
              <span className="Author">Idkmtbh</span>
              &nbsp;to&nbsp;
              <span className="Subreddit">r/mildlyinteresting</span>
              <div>
                <a className="Comment" href="#">Comment</a>
              </div>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
