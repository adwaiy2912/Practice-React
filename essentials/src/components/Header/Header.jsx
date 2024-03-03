import reactImg from "../../assets/react-core-concepts.png";
// images should be imported as absolute path might be lost during build process?
import "./Header.css";

const reactDesc = ["Fundamental", "Crutial", "Core"];

function genRandInt(max) {
   return Math.floor(Math.random() * (max + 1));
}

// export default function > export function
export default function Header() {
   const desc = reactDesc[genRandInt(2)];

   return (
      /* {} used to output a dynamic value -> to put any js exp. btw the brackets -> except if statements, for loops, func. def. and other block statements */
      <header>
         <img src={reactImg} alt="Stylized atom" />
         <h1>React Essentials</h1>
         <p>
            {desc} React concepts you will need for almost any app you are going
            to build!
         </p>
      </header>
   );
}
