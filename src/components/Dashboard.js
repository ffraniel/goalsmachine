import './Dashboard.css';
import React, { useState } from 'react';
import {AdminMenu} from './AdminMenu';
import {PlayersList} from './PlayersList';
import {EditDialogue} from './EditDialogue';
import {allPlayers} from '../assets/players';

export const Dashboard = ({
    loggedIn, 
    setLoggedIn
  }) => {

  const [ filterValue, setFilterValue] = useState('all');

  let user = 'Fran';

  const [players, setPlayers] = useState(allPlayers);
  const [editPlayer, setEditPlayer] = useState(null);

  
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

  const handleSetEditMode = (id) => {
    if (editPlayer === null) {
      let playerEditing = players.filter(player => {
        return player.id === id;
      });
      setEditPlayer(playerEditing[0]);
    } else {
      setEditPlayer(null);
    }
  };

  const changePlayerValue = (playerChanged) => {
    let newPlayers = allPlayers.map(player => {
      if(playerChanged.id === player.id) {
        return playerChanged;
      }
      else {
        return player;
      }
    })
    setEditPlayer(null);
    setPlayers(newPlayers);
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

      {editPlayer && loggedIn &&
        <EditDialogue 
          initialPlayer={editPlayer} 
          setEditPlayer={setEditPlayer} 
          changePlayerValue={changePlayerValue}
        />}

      <PlayersList 
        players={players} 
        loggedIn={loggedIn} 
        handleSetEditMode={handleSetEditMode}
        editPlayer={editPlayer} 
      />

    </section>
  )
};
