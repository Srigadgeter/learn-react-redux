import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { deletePost } from './actions/postActions';

class App extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="card" key={post.id}>
            <img src={logo} alt='react logo' />
            <h3 className="title">{post.title}</h3>
            <p className="text">{post.textContent}</p>
            <button onClick={() => this.props.deletePost(post.id)}>x</button>
          </div>
        )
      })
    ) : (
      <div className="noPosts">No posts yet!!!</div>
    )
    return (
      <div className="App">
        {postList}
      </div>
    );
  }
}

// converting redux state to react props
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

// dispatching actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch(deletePost(id)) } // calling dispatch action by dispatch() function call
  }
}

// passing App component to the connect higher order component
export default connect(mapStateToProps, mapDispatchToProps)(App);
