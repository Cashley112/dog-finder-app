import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import DogList from './DogList';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          exact path='/'
          component={DogList}
        />
        <Route 
          exact path='/dogs/:name'
          component={Dog}
        />
      </Switch>
    </div>
  );
}

export default App;
