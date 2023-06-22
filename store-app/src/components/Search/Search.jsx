import React from 'react'

const Search = ({user}) => {
    const {name,order}=user;
  return (
    <div className='search'>
        
      <div className="search-data">
        <h2>{name}</h2>({order})
      </div>
    </div>
  )
}

export default Search;