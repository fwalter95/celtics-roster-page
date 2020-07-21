import React, {Component} from 'react';

import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch("http://data.nba.net/v2015/json/mobile_teams/nba/2019/teams/celtics_roster.json")
    .then(response => response.json())
    .then(players => this.setState({players: players.t.pl}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {players, searchField} = this.state;
    const filteredPlayers = players.filter(player =>
      player.fn.toLowerCase().includes(searchField.toLowerCase()) ||
      player.ln.toLowerCase().includes(searchField.toLowerCase()) 
      );
    return (
      <div className="App">
        <h1>Celtics Roster</h1>
        <SearchBox
          placeholder = 'search players'
          handleChange = {this.handleChange}
        />
        <CardList players={filteredPlayers}>
        </CardList>
      </div>
    );
  }
}

export default App;
