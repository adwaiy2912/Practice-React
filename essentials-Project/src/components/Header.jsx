import inventmentLogo from "../assets/Investment-calculator-logo.png";

export default function Header() {
   return (
      <header id="header">
         <img src={inventmentLogo} alt="Investment logo" />
         <h1>Investment Calculator</h1>
      </header>
   );
}
