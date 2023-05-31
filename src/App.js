import Sidebar from './components/Sidebar';
import View from './components/View';

import './style.scss'

function App() {
  return (
    <main>
      <h1>Жилфонд</h1>
      <div className="wrapper">
        <Sidebar />
        <View />
      </div>
    </main>
  );
}

export default App;
