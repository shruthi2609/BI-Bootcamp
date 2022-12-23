import { useState } from "react"
function SimpleComponent(props){
    let [count,setCount]=useState(0)
   /* let [state,setState]=useState({
        count:0,
        pname:""
    })*/
    
    //const counter=useState(0)
    const updateCount=()=>{
        console.log("before",count)
        setCount(count+1)
        console.log("after",count)
    }
    return(
        <div>
           
            <h1>Simple Functional Component</h1>
            <h2>{props.pname}</h2>
            <h2>{count}</h2>
            <button onClick={()=>updateCount()}>update</button>
        </div>
    )
}
export default SimpleComponent