import { useState } from "react";

import Header from "./components/Header";
import UserInputGroup from "./components/UserInputGroup";
import ResultTable from "./components/ResultTable";

function App() {
   const [tableValues, setTableValues] = useState([]);

   function handleUserInput(ID, newVal) {
      setTableValues((prevTableValues) => {
         const {
            initialInvestment,
            annualInvestment,
            expectedReturn,
            duration,
         } = prevTableValues;

         return { ...prevTableValues, [ID]: +newVal };
         // + before a var. -> the str. to int
      });
   }

   return (
      <>
         <Header />
         <main>
            <UserInputGroup handleUserChange={handleUserInput} />
            <ResultTable tableBody={tableValues} />
         </main>
      </>
   );
}

export default App;
