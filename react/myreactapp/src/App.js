import ContextProvider from "./Context/ContextProvider";
import HTTPMethods from "./FunctionalComponents/HTTPMethods";
import SimpleComponent from "./FunctionalComponents/SimpleComponent";
import UseEffectComponent from "./FunctionalComponents/UseEffectComponent";
function App(){
  return(
    <div>
    <ContextProvider></ContextProvider>
    </div>
  )
}
export default App