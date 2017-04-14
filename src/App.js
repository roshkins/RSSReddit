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
      nextThing: "",
      loadingPosts: false,
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
    this.infiniteScroll = this.infiniteScroll.bind(this);

    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  createSubreddit(subredditName) {
    this.state.subredditDirectory.push(subredditName);
    this.setState(this.state);
    this.loadPosts();
  }

  deleteSubreddit(index) {
    var tempState = this.state;
    tempState.subredditDirectory.splice(index, 1);
    tempState.nextThing = "";
    this.setState(tempState);
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
    var previousPosts = [];
    var resolvePosts = ( responseJson ) =>
    {
      this.setState( {
        posts: previousPosts.concat(responseJson.data.children.map( ( child ) => {
          var data = child.data;
          return {
            score: data.score,
            thumbnail: data.thumbnail,
            linkUrl: data.url,
            title: data.title,
            submissionTime: new Date(data.created_utc),
            author: data.author,
            subreddit: data.subreddit,
            commentLink: "//www.reddit.com" + data.permalink,
            commentCount: data.num_comments
          }
        } )),
        nextThing: responseJson.data.after,
        loadingPosts: false,
      });
    };

    if (this.state.nextThing) {
      //append posts
      previousPosts = previousPosts.concat(this.state.posts);
      window.fetch("//www.reddit.com/r/" +
        this.state.subredditDirectory.join( "+" ) +
        ".json?after=" + this.state.nextThing + "&limit=50" )
      .then( ( response ) => { return response.json(); } )
      .then( resolvePosts );
    } else {
      //replace posts
      window.fetch("//www.reddit.com/r/" +
        this.state.subredditDirectory.join( "+" ) +
        ".json" )
      .then( ( response ) => { return response.json(); } )
      .then( resolvePosts );
    }
  }

  infiniteScroll() {
    //if you've scrolled 90 perceont of the page, you probably want more
    if (window.scrollY > 0.9 * window.innerWidth && !this.state.loadingPosts) {
      this.setState({loadingPosts: true});
      this.loadPosts();
    }
  }

  render() {
    return (
      <div
        className="App"
        onKeyDown={this.easterEgg}
        tabIndex={1}
        >
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
              commentCount={post.commentCount}
              key={index}
              />);
          })}
        </ol>
      </div>
    );
  }
}

export default App;
