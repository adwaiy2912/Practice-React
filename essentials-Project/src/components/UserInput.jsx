export default function UserInput({ labelName, ID, onChangeVal }) {
   function handleChange(event) {
      onChangeVal(ID, event.target.value);
   }

   return (
      <p>
         <label>{labelName}</label>
         <input type="number" onChange={handleChange} />
      </p>
   );
}
