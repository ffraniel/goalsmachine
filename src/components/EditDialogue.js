import React, {useState} from 'react';
import './EditDialogue.css';

export const EditDialogue =  ({initialPlayer, changePlayerValue, setEditPlayer}) => {

  const [player, setPlayer] = useState(initialPlayer);

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changePlayerValue(player);
  }

  return (
    <section className="edit-dialogue">
      <h3>{player.name}</h3>
      <form onSubmit={handleSubmit} >
        <label for="name">Name</label>
        <input type="text" name="name" value={player.name} onChange={handleChange} />
        <label for="goals">Goals</label>
        <input type="number" name="goals" value={player.goals} onChange={handleChange} />
        <label for="assists">Assists</label>
        <input type="number" name="assists" value={player.assists} onChange={handleChange} />
        <label for="motm">Man of The Matches</label>
        <input type="number" name="motm" value={player.motm} onChange={handleChange} />
        <label for="position">Position</label>
        <select defaultValue={player.position} name="position" onChange={handleChange}>
          <option value="Goalkeeper">GoalKeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Striker">Striker</option>
        </select>
        <input type="submit"/>
      </form>
      <button className="close-edit" onClick={()=>{setEditPlayer(null)}}>x</button>
    </section>
  );
};