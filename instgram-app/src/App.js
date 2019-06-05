import React, { Component } from 'react';
import './App.css';
import PostsPage from '../src/components/PostContainer/PostsPage';
import LoginPage from '../src/components/Login/LoginPage';
import withAuthenticate from '../src/components/Authentication/withAuthenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;