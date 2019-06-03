import React from 'react';
import './Search.css';
import SearchLogo from './SearchLogo'
import SearchBar from './SearchBar'
import SearchIcons from './SearchIcons'

function SearchContainer() {
    return (
        <div class="searchContainer">
           <SearchLogo />
           <SearchBar />
           <SearchIcons />
        </div>
    );
}

export default SearchContainer;
