import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
   return (
      <>
         {/* empty tag -> since react can return only 1 val. (tag/compo.); used instead of <Fragment> (was used in older react proj.) */}
         <Header />
         <main>
            <CoreConcepts />
            <Examples />
         </main>
      </>
   );
}

export default App;
