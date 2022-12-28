import {createSlice} from "@reduxjs/toolkit"
const initialStateValue={userID:"admin",email:"admin@123"}
//const [inp,setInp]=useState(initialStateValue)
const userSlice=createSlice({
    name:"loginReducer",
    initialState:{value:initialStateValue},
    reducers:{
       login:(state,action)=>{
        state.value=action.payload
       } ,
       logout:(state)=>{
        state.value=initialStateValue
       } 
    }
})
export const {login,logout}=userSlice.actions
export default userSlice.reducer