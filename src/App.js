import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import DogList from './DogList';
import Dog from './Dog';
import { render } from 'react-dom';
import charlie from './dogImages/charlie.jpg';
import lumpy from './dogImages/lumpy.jpg';
import tiddwell from './dogImages/tiddwell.jpg';
import React, { Component } from 'react';


class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Charlie",
        age: 5,
        src: charlie,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Lumpy",
        age: 3,
        src: lumpy,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tiddwell",
        age: 4,
        src: tiddwell,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <Dog {...props} dog={currentDog} />
    }
    return(
      <div>
        <Switch>
          <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs} />} />
          <Route exact path='/dogs/:name' render={getDog} />
        </Switch>
      </div>
    )
  }
}

export default App;
