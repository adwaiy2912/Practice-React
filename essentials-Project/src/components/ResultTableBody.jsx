import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

function checkValidity(tableBodyValues) {
   return (
      Object.keys(tableBodyValues).length === 4 &&
      tableBodyValues.duration > 0 &&
      tableBodyValues.initialInvestment > 0 &&
      tableBodyValues.expectedReturn > 0 &&
      tableBodyValues.annualInvestment > 0 &&
      Object.values(tableBodyValues).every(
         (value) => value !== null && value !== undefined
      )
   );
}

export default function ResultTableBody({ tableBodyValues }) {
   const tableBody = checkValidity(tableBodyValues)
      ? calculateInvestmentResults(tableBodyValues)
      : [];

   let totalInterest = 0;
   let investedCapital = 0;

   return (
      <tbody>
         {tableBody.map((yearData) => {
            totalInterest += yearData.interest;
            investedCapital =
               tableBodyValues.initialInvestment +
               yearData.year * tableBodyValues.annualInvestment;
            return (
               <tr key={yearData.year}>
                  <td>{yearData.year}</td>
                  <td>{formatter.format(yearData.valueEndOfYear)}</td>
                  <td>{formatter.format(yearData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(investedCapital)}</td>
               </tr>
            );
         })}
      </tbody>
   );
}
