import React, { Component } from 'react';
import SubredditList from './SubredditList';
import Post from './Post';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subredditDirectory: [],
      posts: [],
      easteregg: [],
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

    //bind callbacks

    this.createSubreddit = this.createSubreddit.bind(this);
    this.deleteSubreddit = this.deleteSubreddit.bind(this);
    this.easterEgg = this.easterEgg.bind(this);
  }

  createSubreddit(subredditName) {
    this.state.subredditDirectory.push(subredditName);
    this.setState(this.state);
    this.loadPosts();
  }

  deleteSubreddit(index) {
    this.state.subredditDirectory.splice(index, 1);
    this.setState(this.state);
    this.loadPosts();
  }

  easterEgg(e) {
    this.state.easteregg.push(e.keyCode);
    if( this.state.easteregg.length >= 11 && this.state.easteregg.slice(-11).every((value, index) => {
      return value === [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13][index];
    })){
      document.getElementsByTagName('body')[0].className += " easter-egg"
    } else {
      this.setState(this.state);
    }
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
      <div className="App" onKeyDown={this.easterEgg} tabIndex={1}>
        <SubredditList
          initialSubreddits={this.state.subredditDirectory}
          createSubreddit={this.createSubreddit}
          deleteSubreddit={this.deleteSubreddit}
        />
        <ol className="Posts">
          {this.state.posts.map((post, index) => {
            return (<Post
              thumbnail={post.thumbnail}
              score={post.score.toString()}
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
