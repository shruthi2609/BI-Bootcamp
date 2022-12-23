import ConsumerOne from "./ConsumerOne"
import ConsumerTwo from "./ConsumerTwo"
import SimpleContext from "./SimpleContext"
import { useState } from "react"
function ContextProvider(){
    const [conData,setConData]=useState("this is initial")
    const changeData=()=>{
        setConData("this is a new value")
    }
    return(
        <div>
            <SimpleContext.Provider value={{data:conData,handleData:changeData}}>
                <ConsumerOne></ConsumerOne>
                <ConsumerTwo></ConsumerTwo>
            </SimpleContext.Provider>
        </div>
    )
}
export default ContextProvider