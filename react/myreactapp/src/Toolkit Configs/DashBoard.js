import {useSelector} from "react-redux"
function DashBoard(){
    const displayData=useSelector((state)=>state.loginReducer.value)
return(
    <>
    {console.log(useSelector((state)=>state.loginReducer.value))}
    <h1>DashBoard Page</h1>
    <h1>UserID:{displayData.userID}</h1>
    <h2>Email:{displayData.email}</h2>
    </>
)
}
export default DashBoard