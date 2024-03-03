import UserInput from "./UserInput";

export default function UserInputGroup({ handleUserChange }) {
   function handleChangeVal(ID, newVal) {
      handleUserChange(ID, newVal);
   }

   return (
      <section id="user-input">
         <div className="input-group">
            <UserInput
               ID="initialInvestment"
               labelName="Initial Investment"
               onChangeVal={handleChangeVal}
            />
            <UserInput
               ID="annualInvestment"
               labelName="Annual Investment"
               onChangeVal={handleChangeVal}
            />
            <UserInput
               ID="expectedReturn"
               labelName="Expected Return"
               onChangeVal={handleChangeVal}
            />
            <UserInput
               ID="duration"
               labelName="Duration"
               onChangeVal={handleChangeVal}
            />
         </div>
      </section>
   );
}
