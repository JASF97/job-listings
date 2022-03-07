import React from 'react'

const Search = ({ searchKeyword }) => {
    return(
        <div className='header-container'>
            <ul>
                <input type="text" onChange={(e) => searchKeyword(e.target.value)} />
            </ul>
        </div>
    )
}

export default Search