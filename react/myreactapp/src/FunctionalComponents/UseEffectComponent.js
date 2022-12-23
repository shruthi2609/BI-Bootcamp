import { useState,useEffect } from "react"
import axios from "axios"
function UseEffectComponent(props){
const [data,setData]=useState([])
const [count,setCount]=useState(0)
useEffect(()=>{
  /*  axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>setData(res.data)).catch((err)=>console.log(err))*/
 async function fetchData(){
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(res.data)
    } catch (error) {
        console.log(error)
    }
 }
 fetchData()

},[])

useEffect(()=>{
console.log("second useeffect is executed")

},[props.desc,count])
useEffect(()=>{
    return ()=>{
        console.log("unmount")
    }
})
/*const fetchData=()=>{

}*/
/*const fetchData = async () => {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
        setData(res.data)
    } catch (error) {
        console.log(error)
    }
}*/
const updateCount=()=>{
    console.log("before",count)
    setCount(count+1)
    console.log("after",count)
}
    return(
        <div>
            {console.log("render")}
            <h1>props {props.pname}</h1>
            <h2>{count}</h2>
            <button onClick={()=>updateCount()}>update</button>
           
            {
                data.map((item)=>(
                    <div>
                        <h1>{item.title}</h1>
                        <p>{item.id}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default UseEffectComponent