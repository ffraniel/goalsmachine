import React from 'react';
import './Filter.css';
import goalsIcon from '../assets/goal.svg';
import creativeIcon from '../assets/new-idea.svg';
import motmIcon from '../assets/badge.svg';

export const Filter = ({
    filterValue,
    setFilterAction
  }) => {

  return (
    <section className="options">
      <h4>Showing {filterValue}</h4>
      {/* <select onChange={setFilterAction}>
        <option value="all">All</option>
        <option value="goals">Goals</option>
        <option value="assists">Assists</option>
        <option value="motm">MOTM</option>
      </select> */}


          <img alt="Man of the match" src={motmIcon} className="motm-icon icon-margin-down" />

      <button 
        className={filterValue === 'all' ? 'select-button selected': 'select-button'} 
        onClick={()=>{setFilterAction('all')}}
      >All</button>
      <button 
        className={filterValue === 'goals' ? 'select-button selected': 'select-button'} 
        onClick={()=>{setFilterAction('goals')}}
      >Goals    <img className="button-icon" alt="Goals scored" src={goalsIcon}/></button>
      <button 
        className={filterValue === 'assists' ? 'select-button selected': 'select-button'} 
        onClick={()=>{setFilterAction('assists')}}
      >Assists  <img alt="Goals created" src={creativeIcon} className="button-icon" /></button>
      <button 
        className={filterValue === 'motm' ? 'select-button selected': 'select-button'} 
        onClick={()=>{setFilterAction('motm')}}
      >MOTM  <img alt="Man of the match" src={motmIcon} className="button-icon" /></button>
    </section>
  )
};
