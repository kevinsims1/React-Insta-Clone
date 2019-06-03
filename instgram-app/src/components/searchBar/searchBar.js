import React from 'react';


function SearchBar() {
  return (
    <div className="searchBar">
        <div>
            <img src="#" className="instaImg"/>
            <h3>Instagram</h3>
        </div>
        
        <input placeholder="Search"></input>

        <div>
            <img src="#" />
            <img src="#" />
            <img src="#" /> 
        </div>
    </div>
  );
}

export default SearchBar;