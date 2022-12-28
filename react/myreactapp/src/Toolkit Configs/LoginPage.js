
import {useDispatch} from "react-redux"
import {login,logout} from "./slice"
function LoginPage(){
    const dispatch=useDispatch()
    const triggerLogin=()=>{
    dispatch(login({userID:"john@123",email:"john@gmail.com"}))
    }
    const triggerLogout=()=>{
        dispatch(logout())
        }
    return(
        <>
        <button onClick={()=>triggerLogin()}>login</button>
        <button onClick={()=>triggerLogout()}>logout</button>
        
        </>
    )
}
export default LoginPage