import React, { useState } from 'react';

import './Sidebar.scss';

function Sidebar() {

  async function logJSONData(value) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await response.json();

    for (let i = 0; i < jsonData.length; i++) {
      if ((jsonData[i].username === value) || (jsonData[i].id === Number(value))) {
        console.log(jsonData[i])
      }
    }

    // console.log(jsonData[value]);
  }

  const [searchValue, setSearchValue] = useState('');    

  const onChangeSearch = (event) => {
    
    setSearchValue(event.target.value);
    logJSONData(event.target.value);
  }

  return (
    <div className="sidebar">
      <form action="POST" className="sidebar__search">
        <h2>Поиск сотрудников</h2>
        <input type="text" onChange={onChangeSearch} placeholder='Введите id или имя'/>
      </form>
      <div className="sidebar__results">
        <h2>Результаты</h2>
        <span>начните поиск</span>
      </div>
    </div>
  )
}

export default Sidebar;
