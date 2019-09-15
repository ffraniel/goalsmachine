import './Dashboard.css';
import React, { useState } from 'react';
import {AdminMenu} from './AdminMenu';
import {PlayersList} from './PlayersList';

export const Dashboard = ({loggedIn, setLoggedIn}) => {

  const [ filterValue, setFilterValue] = useState('all');

  let user = 'Fran';
  const allPlayers = [
    {
      name: 'Andy',
      goals: 22,
      assists: 15,
      motm: 6, 
      img: '',
      medals: ['goals'], 
      position: 'Striker'
    },
    {
      name: 'Ben', 
      goals: 15,
      assists: 12,
      motm: 3,
      img: '',
      medals: [],
      position: 'Midfield'
    },
    {
      name: 'Fran',
      goals: 8,
      assists: 10,
      motm: 2,
      img: '',
      medals: [],
      position: 'Defender'
    },
    {
      name: 'James',
      goals: 10,
      assists: 5, 
      motm: 5,
      img: '',
      medals: [],
      position: 'Defender'
    },
    {
      name: 'Callum',
      goals: 0,
      assists: 0, 
      motm: 8,
      img: '',
      medals: [],
      position: 'GoalKeeper'
    },
    {
      name: 'Dave',
      goals: 14,
      assists: 9, 
      motm: 3,
      img: '',
      medals: [],
      position: 'Midfield'
    },
    // {
    //   name: '',
    //   goals: 0,
    //   assists: 0, 
    //   motm: 0,
    //   img: '',
    //   medals: [],
    //   position: ''
    // }
  ];

  const [players, setPlayers] = useState(allPlayers);

  const setFilterAction = (e) => {
    let selection = e.target.value;
    setFilterValue(selection);

    if (selection === 'all') {
      setPlayers(allPlayers);
    } else {
      let sortedPlayers = allPlayers.sort((a, b) => {
        return b[selection] - a[selection];
      });
      setPlayers(sortedPlayers);
    }
  };

  return (
    <section className="dashboard">
      <AdminMenu user={user} setLoggedIn={setLoggedIn} loggedIn={loggedIn} />

      <section className="options">
        <h4>Showing {filterValue}</h4>
        <select onChange={setFilterAction}>
          <option value="all">All</option>
          <option value="goals">Goals</option>
          <option value="assists">Assists</option>
          <option value="motm">MOTM</option>
        </select>
      </section>

      <PlayersList players={players} />

    </section>
  )
};
