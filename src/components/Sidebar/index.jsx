import React, { useState } from 'react';

import SearchResult from '../SearchResult';
import ItemLoader from '../ItemLoader';

import './Sidebar.scss';

function Sidebar({ user, setUser, activeUser, setActiveUser }) {

const [searchValue, setSearchValue] = useState('');
const [isLoading, setIsLoading] = useState('');

async function logJSONData(value) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const jsonData = await response.json();
  setIsLoading(false);
  let counter;
  let searchArr = [];
  counter = 0;
  for (let i = 0; i < jsonData.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if ((jsonData[i].username === value[j]) || (jsonData[i].id === Number(value[j]))) {
        searchArr[searchArr.length] = jsonData[i];
        setUser(searchArr);
        counter++;
      }
    }
  }

  if (counter === 0) {
    setUser("Ничего не найдено")
    setActiveUser('')
  }
}

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  const onSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    let splitSearch = searchValue.split(',');
    logJSONData(splitSearch);
  }

  return (
    <div className="sidebar">
      <form action="POST" className="sidebar__search" onSubmit={onSubmit}>
        <h2>Поиск сотрудников</h2>
        <input type="text" placeholder='Введите id или имя' onChange={onChangeSearch}/>
      </form>
      <div className="sidebar__results">
        <h2>Результаты</h2>
        {isLoading && <div className="sidebar__loader"><ItemLoader /> <ItemLoader /> <ItemLoader /></div>}
        {!isLoading && <SearchResult user={user} activeUser={activeUser} setActiveUser={setActiveUser}/>}
      </div>
    </div>
  )
}

export default Sidebar;
