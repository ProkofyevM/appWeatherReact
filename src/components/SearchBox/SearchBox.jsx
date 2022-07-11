import React from 'react';


const SearchBox = (props) => {

    return (
            <input className='search-bar'
            {... props}/>
    );
};

export default SearchBox;