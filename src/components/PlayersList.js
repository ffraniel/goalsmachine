import "./PlayersList.css";
import React from "react";
import {Medals} from './Medals';

export const PlayersList = ({ 
    players, 
    loggedIn,
    handleSetEditMode,
    editPlayer
  }) => {

  let topGoal = players.sort((a, b)=>{
    return b.goals - a.goals;
  })[0];
  let topAssist = players.sort((a, b)=>{
    return b.assists - a.assists;
  })[0];
  let topMOTM = players.sort((a, b)=>{
    return b.motm - a.motm;
  })[0];

  return (
    <section className="player-list">

      {players && players.map(player => {
        const {
          name,
          goals,
          assists, 
          motm,
          // img,
          // medals,
          position,
          id
        } = player;

        let showMedals = false;
        if (player.id === topGoal.id || player.id === topAssist.id || player.id === topMOTM.id) {
          showMedals = true;
        }


        return (
          <section className="player-card" key={name}>
            <div className="player-card-img-container">
              {showMedals &&
                <Medals topGoal={topGoal} topAssist={topAssist} topMOTM={topMOTM} />
              }
              <img
                className="player-image"
                src="https://i.pravatar.cc/220"
                alt=""
              />
            </div>
            <h4>{name}</h4>
            <h5>Goals {goals}</h5>
            <h5>Assists {assists}</h5>
            <h5>MOTM {motm}</h5>
            <p>{position}</p>
            {loggedIn &&
              <>
                {!editPlayer && <button onClick={()=> handleSetEditMode(id)}>Edit</button>}
                {editPlayer && <button onClick={()=> handleSetEditMode(id)}>Stop Editing {editPlayer.name}</button>}
              </>
            }
          </section>
        )})
      }
    </section>
  );
};
