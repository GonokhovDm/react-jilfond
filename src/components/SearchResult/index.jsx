import React from 'react'

import './SearchResult.scss'

import userSvg from '../../svg/photo.svg';

function SearchResult( { user, setActiveUser } ) {

  return (
    <div className="search-result">
      {typeof user !== "string" ? 
        (user.map((item, index) => (
          <div className="search-result__item" key={index} onClick={() => setActiveUser(item)}>
            <img src={userSvg} alt="user" />
            <div className="search-result__item-info">
              <div>
                <h3>{item.username}</h3>
                <p>{item.email}</p> 
              </div>
            </div>
          </div>
        ))) : <p>{user}</p>
      }
    </div>
  )
}

export default SearchResult
