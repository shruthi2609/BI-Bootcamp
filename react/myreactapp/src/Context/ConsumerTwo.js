import { useContext } from "react"
import SimpleContext from "./SimpleContext"
function ConsumerTwo(){
const {data,handleData}=useContext(SimpleContext)
    return(
        <div>
             {console.log(useContext(SimpleContext))}
            <h1>Consumer Two :{data}</h1>
           
        </div>
    )
}
export default ConsumerTwo