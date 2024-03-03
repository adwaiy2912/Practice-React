export default function Tabs({ children, buttons, buttonsContainer = "menu" }) {
   const ButtonsContainer = buttonsContainer;
   return (
      <>
         {/*
         menu - to create a list of buttons 
         ButtonsContainer - to create a compo. using prop -> which can also create buildin tags (like menu)
         */}
         <ButtonsContainer>{buttons}</ButtonsContainer>
         {children}
      </>
   );
}
