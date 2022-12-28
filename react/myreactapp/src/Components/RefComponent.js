import { useRef } from "react";
function RefComponent(){
    const handleLogin=(e)=>{
        e.preventDefault()
        console.log(uname.current.value,password.current.value)
    }
    const uname=useRef()
    const password=useRef()
    return(
        <div>
            <input type='text' placeholder="username" ref={uname}></input>
            <input type='text' placeholder="password" ref={password}></input>
            <button onClick={(e)=>handleLogin(e)}></button>
        </div>
    )
}
export default RefComponent