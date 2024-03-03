import { useState } from "react";

export default function Player({
   initialName,
   symbol,
   isActive,
   onChangeName,
}) {
   const [playerName, setPlayerName] = useState(initialName);
   const [isEditing, setIsEditing] = useState(false);

   function handleEditClick() {
      setIsEditing((editing) => !editing);
      // correct way as setIsEditing(!isEditing); schedules an update and is not instantaneous
   }

   function handleChange(event) {
      const newName = event.target.value;
      setPlayerName(newName);

      if (isEditing) {
         onChangeName(symbol, newName);
      }
   }

   let editablePlayerName = <span className="player-name">{playerName}</span>;
   let butCaption = "Edit";

   if (isEditing) {
      editablePlayerName = (
         <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
         />
      );
      butCaption = "Save";
   }

   return (
      <li className={isActive ? "active" : undefined}>
         <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
         </span>
         <button onClick={handleEditClick}>{butCaption}</button>
      </li>
   );
}
