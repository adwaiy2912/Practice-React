import ResultTableBody from "./ResultTableBody";

export default function ResultTable({ tableBody }) {
   const tableHeading = (
      <tr>
         <th>Year</th>
         <th>Investment Value</th>
         <th>Interest (Year)</th>
         <th>Total Interest</th>
         <th>Invested Capital</th>
      </tr>
   );

   return (
      <table id="result">
         <thead>{tableHeading}</thead>
         <ResultTableBody tableBodyValues={tableBody} />
      </table>
   );
}
