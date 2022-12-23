import { useEffect, useState } from "react"
import axios from "axios"
function HTTPMethods(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/empDetails").then((res)=>setData(res.data)).catch((err)=>console.log(err))
    },[])
    const createData=()=>{
        axios.post("http://localhost:3001/empDetails",{
            "id":3,
            "fname":"henry",
            "email":"henry@gmail.com",
            "phone":293820938
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    const putData=()=>{
        axios.put("http://localhost:3001/empDetails/3",{
            "id":3,
            "fname":"henrie",
            "email":"henry@gmail.com",
            "phone":293820938
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    const patchData=()=>{
        axios.patch("http://localhost:3001/empDetails/3",{
            "fname":"henrry"
            
        }).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }
    const deleteData=()=>{
        axios.delete("http://localhost:3001/empDetails/3").then((res)=>console.log(res)).catch((err)=>console.log(err))
    }

    return(
        <div>
            <h1>Details</h1>
            <button onClick={()=>createData()}>create contact</button>
            <button onClick={()=>putData()}>put contact</button>
            <button onClick={()=>patchData()}>patch contact</button>
            <button onClick={()=>deleteData()}>delete contact</button>
            {
                data.map((item)=>(
                    <div>
                        <h1>{item.fname}</h1>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default HTTPMethods