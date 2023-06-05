import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import View from './components/View';

import './style.scss'

function App() {

  const [user, setUser] = useState(''); 
  const [activeUser, setActiveUser] = useState('');

  return (
    <main>
      <h1>Жилфонд</h1>
      <div className="wrapper">
        <Sidebar user={user} setUser={setUser} activeUser={activeUser} setActiveUser={setActiveUser}/>
        <View 
          user={user}
          activeUser={activeUser}
        />
      </div>
    </main>
  );
}

export default App;
