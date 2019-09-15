import './AdminMenu.css';
import React from 'react';

export const AdminMenu = ({ user, setLoggedIn, loggedIn }) => {

  return (
    <section className="admin-menu">
      
      {loggedIn && <button onClick={()=>{setLoggedIn(false)}}>Sign out</button>}
      {loggedIn && <h4>Logged in as {user}</h4>}

      {!loggedIn && <button onClick={()=>{setLoggedIn(true)}}>Log In</button>}
    </section>
  )
};
