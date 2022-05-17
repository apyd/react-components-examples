import React, { useState, useRef } from 'react'

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const searchInputRef = useRef();

    const onInputChange = () => {
        setSearchQuery(searchInputRef.current.value)
    }

    const onSearchHandler = (event) => {
        event.preventDefault();
        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false)
        }, 1000)
    }

    return (
        <div className="wrapper">
            <h2>Example of function component - SearchBar</h2>
            <form onSubmit={onSearchHandler}>
                <input type="search" placeholder="Search for..." id="search" name="search" ref={searchInputRef} value={searchQuery} onChange={() => onInputChange()} />
                <label htmlFor="search"></label>
                <button className="button" type="submit">{isSearching ? 'Searching...' : 'Search'}</button>
            </form>
            <span>Query: {searchQuery}</span>
        </div >
    )
}

export default SearchBar