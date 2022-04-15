import React, {useState} from 'react';

const SearchBar = () => {
    return (
        <div className = "search-bar">
            <form onSubmit = {props.SearchBookByISBN} action = " ">
                <input type = "text" />
                <button type = "search"> Search By ISBN </button>
            </form>
        </div>
    )
}

export default SearchBar;