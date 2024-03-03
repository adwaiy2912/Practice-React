import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
   return (
      <section id="core-concepts">
         <h2>Time to get started!</h2>
         <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
               <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/*
      Cust. Comp. & Props -
      making custom components reusable using props
      1) Assigning all props values individually - 
      <CoreConcept
         title={CORE_CONCEPTS[0].title}
         description={CORE_CONCEPTS[0].description}
         image={CORE_CONCEPTS[0].image}
      />
      2) Using Spread Operator - (better)
      <CoreConcept {...CORE_CONCEPTS[0]} />
      3) outputting list data dynamically - 
      using .map() fnc.
      */}
         </ul>
      </section>
   );
}
