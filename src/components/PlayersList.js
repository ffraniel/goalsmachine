import "./PlayersList.css";
import React from "react";
import star from '../assets/star-icon.png';

export const PlayersList = ({ 
    players, 
    loggedIn,
    handleSetEditMode,
    editPlayer
  }) => {

  return (
    <section className="player-list">

      {players && players.map(player => {
        const {
          name,
          goals,
          assists, 
          motm,
          img,
          medals,
          position,
          id
        } = player;

        return (
          <section className="player-card" key={name}>
            <div className="player-card-img-container">
              {medals.length > 0 && <img className="medal" src={star} alt="top scorer medal" />}
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
