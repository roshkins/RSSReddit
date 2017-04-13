import React, { Component } from 'react';
import SubredditList from './SubredditList';
import Post from './Post';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subredditDirectory: [],
      posts: []
    };

    //load subreddits
    window.fetch("//www.reddit.com/subreddits/popular.json")
    .then( ( response ) => { return response.json() } ).then( ( responseJson ) =>
    {
      this.setState( {
        subredditDirectory: responseJson.data.children.map( (child) => {
          return child.data.display_name;
        } )
      } )
      this.loadPosts();
    } )
  }

  loadPosts() {
    window.fetch("//www.reddit.com/r/" +
      this.state.subredditDirectory.join( "+" ) + ".json" )
    .then( ( response ) => { return response.json(); } )
    .then( ( responseJson ) =>
    {
      this.setState( {
        posts: responseJson.data.children.map( ( child ) => {
          var data = child.data;
          return {
            score: data.score,
            thumbnail: data.thumbnail,
            linkUrl: data.url,
            title: data.title,
            submissionTime: new Date(data.created_utc),
            author: data.author,
            subreddit: data.subreddit,
            commentLink: "//www.reddit.com" + data.permalink
          }
        } )
      } );
    } )
  }

  render() {
    return (
      <div className="App">
        <SubredditList
          initialSubreddits={this.state.subredditDirectory} />
        <ol className="Posts">
          {this.state.posts.map((post, index) => {
            return (<Post
              thumbnail={post.thumbnail}
              score={post.score}
              linkUrl={post.linkUrl}
              title={post.title}
              submissionTime={post.submissionTime}
              author={post.author}
              subreddit={post.subreddit}
              commentLink={post.commentLink}
              key={index}
              />);
          })}
        </ol>
      </div>
    );
  }
}

export default App;
