import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/postContainer/postContainer';
import SearchBar from "./components/searchBar/searchBar"
import CommentSection from "./components/commentSection/commentSection"

class App extends React.Component {
  constructor(){
    super()
    this.state= {
      data: dummyData
    }
  }

 

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <div className="post">    
          {this.state.data.map(item => (
            <PostContainer 
              key={item.id}
              username={item.username}
              imageUrl={item.imageUrl}
              thumbnailUrl={item.thumbnailUrl}
              likes={item.likes}
              timestamp={item.timestamp}
            />
            ))
          }
      </div>
      
    
     
    
    </div>
  );
}

}

export default App;
