import React from 'react';
import './Search.css';
import SearchLogo from './SearchLogo'
import SearchBar from './SearchBar'
import SearchIcons from './SearchIcons'

function SearchContainer(props) {
    return (
        <div class="searchContainer">
           <SearchLogo />
           <SearchBar s={props.s} />
           <SearchIcons />
        </div>
    );
}

export default SearchContainer;
