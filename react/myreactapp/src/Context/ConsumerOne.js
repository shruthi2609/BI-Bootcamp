import { useContext } from "react"
import SimpleContext from "./SimpleContext"
function ConsumerOne(){

    return(
        <div>
             {console.log(useContext(SimpleContext))}
            <h1>Consumer One</h1>
        </div>
    )
}
export default ConsumerOne