import React, {useState} from 'react';
import './EditDialogue.css';

export const EditDialogue =  ({initialPlayer, changePlayerValue}) => {

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
      <p>name: {player.name}</p>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" value={player.name} onChange={handleChange} />
        <input type="number" name="goals" value={player.goals} onChange={handleChange} />
        <input type="number" name="assists" value={player.assists} onChange={handleChange} />
        <input type="number" name="motm" value={player.motm} onChange={handleChange} />
        <select defaultValue={player.position} name="position" onChange={handleChange}>
          <option value="Goalkeeper">GoalKeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Striker">Striker</option>
        </select>
        <input type="submit"/>
      </form>
    </section>
  );
};