import React, { Component } from 'react';
import SubredditList from './SubredditList';
import Post from './Post';
import './App.css';

class App extends Component {

  getInitalState() {

  }

  render() {
    return (
      <div className="App">
        <SubredditList />
        <ol className="Posts">
          {[0,0,0].map((object, index) => {
            return (<Post score="17.1k"
              thumbnail="//b.thumbs.redditmedia.com/AwdUKfpVjz_1T7JMPfePIrS34IgEbtvEy_dWlr3bHmE.jpg"
              linkUrl="#"
              title="An entire DLSR camera, disassembled."
              submissionTime="4 hours ago"
              author="Idkmtbh"
              subreddit="mildlyinteresting"
              commentLink="#"
              key={index}
              />);
          })}
        </ol>
      </div>
    );
  }
}

export default App;
