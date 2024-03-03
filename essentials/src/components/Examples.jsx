import { useState } from "react";

import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";

export default function Examples() {
   // let tabContent = "Click on any button"; - incorrect way of def. var. or const.
   const [selectedTopic, setSelectedTopic] = useState();
   /*
   Hooks -  only call inside compo. fnc.; only call on top level (no nesting)
   returns exactly 2 val. -> 1st val = curr. state val., 2nd val = fnc. to update 1st val state; also tells react to execute the main fnc., App() to exe. again
   useState("components"); // 'components' is the default val.
   */

   function handleClick(selectedButton) {
      // tabContent = selectedButton; - does not works
      setSelectedTopic(selectedButton);
      // console.log(selectedTopic); - old selectedTopic val. is shown cause fnc. App() chnage is scheduled -> not done instantaneously after setSelectedTopic()
   }

   return (
      <Section title="Examples" id="examples">
         <Tabs
            // buttonsContainer="menu" - not needed as menu is default val. for Tabs compo.
            buttons={
               <>
                  <TabButton
                     isSelected={selectedTopic === "components"}
                     onClick={() => handleClick("components")}
                  >
                     Components
                  </TabButton>
                  <TabButton
                     isSelected={selectedTopic === "jsx"}
                     onClick={() => handleClick("jsx")}
                  >
                     JSX
                  </TabButton>
                  <TabButton
                     isSelected={selectedTopic === "props"}
                     onClick={() => handleClick("props")}
                  >
                     Props
                  </TabButton>
                  <TabButton
                     isSelected={selectedTopic === "state"}
                     onClick={() => handleClick("state")}
                  >
                     State
                  </TabButton>
                  {/*
                  Component composition - content passed btw compo. opening and closing tag -> special prop val -> children; can be a static or dynamic val. -> also be another xomplex JSX struct.
                  not inherently better than, <CoreConcept {...CORE_CONCEPTS[0]} /> -> depends on use case 
                  <TabButton label="Components"></TabButton> also works -> personal pref.

                  creating a func. for a prop (i.e. onSelect) in App -> makes it usable in other components (prev. unusable cause def. in compo. def. like in TabButton.jsx file)

                  className - for dynamic styling; to add (or remove) css class to a compo. -> similar to class in html
                  */}
               </>
            }
         >
            {!selectedTopic ? (
               <p>Please select a topic</p>
            ) : (
               <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                     <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
               </div>
            )}
         </Tabs>
         {/*
               Rendering content conditionally 
               1) using ternary op.- if selectedTopic is undefined (for initial state) show <p> else <div>
               2) using AND - if exp. is true -> content showed
                  eg. {!selectedTopic && <p>Please select a topic</p>}
               3) using var. and if - assign jsx code to var. -> use if to update the val. (code) of var.
                  eg let tabContent = <p>Please select a topic</p>;
                     if (selectedTopic) {
                        tabContent = <div> ... </div>; // put div content
                     }
               */}
      </Section>
   );
}
