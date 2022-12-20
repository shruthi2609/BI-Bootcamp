
import { useState } from "react"
import LCM from "./Components/LifeCycleMethods"

function App(){
  const [parent,setParent]=useState("parent 1")
  const updateParent=()=>{
    setParent("parent 2")
  }
  return(
    
    <div>
      {console.log("parent Render")}
      <h1> Parent Data{parent}</h1>
      <button onClick={()=>updateParent()}>update Parent</button>
      <LCM pname="IPhone 15" desc="new release is not available , please update"></LCM>
      
   </div>
  )
}
export default App