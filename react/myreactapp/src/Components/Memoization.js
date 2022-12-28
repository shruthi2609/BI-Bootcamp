import { useState,useMemo,useCallback } from "react"

function Memoization(){
    //const defaultValues=["john","peter","henry"]
    const defaultValues=useMemo(
     ()=>{
        console.log("initialization")
        return ["john","peter","henry"]
    },[])

    const deleteEmp=(empDel)=>{
        console.log("delete func")
        setEmp((item)=>item.filter((emp)=>emp!==empDel))
    }
    const deleteEmpCallBack=useCallback(deleteEmp,[])
    const [emp,setEmp]=useState(defaultValues)
    return(
        <>
        <h1>Employee List</h1>
       {console.log(defaultValues)}
        {
            emp.length===0?(
                <button onClick={()=>setEmp(defaultValues)}>reset</button>
            ):(
                <div>
                {
                    emp.map((item)=>(
                        <>
                        <button onClick={()=>deleteEmpCallBack(item)}>delete</button>{item}
                        </>
                    ))
                }
                </div>
            )
            
        }
        </>
    )
}
export default Memoization