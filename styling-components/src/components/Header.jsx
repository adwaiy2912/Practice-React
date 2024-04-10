import logo from "../assets/logo.png";

// import { styled } from "styled-components";
// import classes from "./Header.module.css";
// converting css file to a module for scoping; as normal importing causes it to scpoed globally -> can cause conflicts

// add styles to compo. using styled-components; use '&' to style the wrapping compo. (inside) the styled compo. -> using & <compo.> (with space) targets child element; using &:<pseudo_selector> (without space) targets the compo. itself
/*
const StyledHeader = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;
   margin-bottom: 2rem;

   & img {
      object-fit: contain;
      margin-bottom: 2rem;
      width: 11rem;
      height: 11rem;
   }

   & h1 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.4em;
      text-align: center;
      text-transform: uppercase;
      color: #9a3412;
      font-family: "Pacifico", cursive;
      margin: 0;
   }

   .paragraph {
      text-align: center;
      color: #a39191;
      margin: 0;
   }

   @media (min-width: 768px) {
      margin-bottom: 4rem;

      & h1 {
         font-size: 2.25rem;
      }
   }
`;
*/

export default function Header() {
   return (
      /*
      <header>
         <img src={logo} alt="A canvas" />
         <h1>ReactArt</h1>
         <p className={classes.paragraph}>
            A community of artists and art-lovers.
         </p>
         {
         Applying inline styling in jsx 
         <p
            style={{
               color: "red",
               textAlign: "left",
            }}
         >
            A community of artists and art-lovers.
         </p>}
      </header>

      <StyledHeader>
         <img src={logo} alt="A canvas" />
         <h1>ReactArt</h1>
         <p>A community of artists and art-lovers.</p>
      </StyledHeader>
      */
      <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
         <img
            src={logo}
            alt="A canvas"
            className="mb-8 w-44 h-44 object-contain"
         />
         <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title">
            ReactArt
         </h1>
         <p className="text-stone-500">
            A community of artists and art-lovers.
         </p>
      </header>
   );
}
