// Using object destructuring -> var. names must be same as def. in data.js file
export default function CoreConcept({ image, title, description }) {
   return (
      <li>
         <img src={image} alt={title} />
         <h3>{title}</h3>
         <p>{description}</p>
      </li>
   );
}

/*
Assigning values individually - 
function CoreConcept(props) {
   return (
      <li>
         <img src={props.image} alt={props.title} />
         <h3>{props.title}</h3>
         <p>{props.description}</p>
      </li>
   );
}
*/
