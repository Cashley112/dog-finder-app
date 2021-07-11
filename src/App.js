import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import DogList from './DogList';

function App() {
  return (
    <div className="App">
      <DogList />
    </div>
  );
}

export default App;
