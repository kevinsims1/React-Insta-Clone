import React from 'react';
import "./searchBar.css"

function SearchBar() {
  return (
    <div className="searchBar">
        <div>
            <img src="https://image.flaticon.com/icons/svg/1077/1077042.svg" className="instaImg"/>
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