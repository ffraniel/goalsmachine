import './Dashboard.css';
import React, { useState } from 'react';
import {AdminMenu} from './AdminMenu';
import star from '../assets/star-icon.png';

export const Dashboard = (props) => {
  const { loggedIn, setLoggedIn } = props;
  const [ filterValue, setFilterValue] = useState('all');

  const setFilterAction = (e) => {
    setFilterValue(e.target.value);
    console.log(filterValue)
  };

  return (
    <section className="dashboard">
      {loggedIn && <AdminMenu />}
      <section className="options">
        <h4>Currently Showing {filterValue}</h4>
        <select onChange={setFilterAction}>
          <option value="all">All</option>
          <option value="goals">Goals</option>
          <option value="assists">Assists</option>
          <option value="motm">MOTM</option>
        </select>
      </section>

      <section className="player-list">

        <section className="player-card">
          <div className="player-card-img-container">
            <img className="medal" src={star} alt="top scorer medal" />
            <img className="player-image" src="https://i.pravatar.cc/220" alt="" />
          </div>
          <h4>Andy McNab</h4>
          <h5>Goals 18</h5>
          <h5>Assists 12</h5>
          <h5>MOTM 5</h5>
          <p>Position Striker</p>
        </section>

        <section className="player-card">
          <div className="player-card-img-container">
            <img className="player-image" src="https://i.pravatar.cc/220" alt="" />
          </div>
          <h4>Fran Whitehead</h4>
          <h5>Goals 5</h5>
          <h5>Assists 8</h5>
          <h5>MOTM 2</h5>
          <p>Position Defender</p>
        </section>


        <section className="player-card">
          <div className="player-card-img-container">
            <img className="player-image" src="https://i.pravatar.cc/220" alt="" />
          </div>
          <h4>Ben Karlin</h4>
          <h5>Goals 12</h5>
          <h5>Assists 9</h5>
          <h5>MOTM 5</h5>
          <p>Position Midfield</p>
        </section>

      </section>

    </section>
  )
};
