import { useContext } from "react"
import SimpleContext from "./SimpleContext"
function ConsumerOne(){
const {data,handleData}=useContext(SimpleContext)
    return(
        <div>
             {console.log(useContext(SimpleContext))}
            <h1>Consumer One :{data}</h1>
            <button onClick={()=>handleData()}>Change context</button>
        </div>
    )
}
export default ConsumerOne