import './AdminMenu.css';
import React from 'react';
import {Filter} from './Filter';

export const AdminMenu = ({ user, setLoggedIn, loggedIn, filterValue, setFilterAction }) => {

  return (
    <section className="admin-menu">
      <Filter filterValue={filterValue} setFilterAction={setFilterAction} />
      
      {loggedIn && <button onClick={()=>{setLoggedIn(false)}}>Sign out</button>}
      {loggedIn && <h4>Logged in as {user}</h4>}

      {!loggedIn && <button onClick={()=>{setLoggedIn(true)}}>Log In</button>}
    </section>
  )
};
