import React, { useState } from "react";
class StateComponent extends React.Component{
constructor(props){
super(props)
this.department="CSE"
}
changeDepartment=()=>{
console.log("before",this.department)
this.department="ECE"
console.log("after",this.department)
}
render(){
    console.log(this.props)
    return(
        <div>
            <h1>Props {this.props.fname}</h1>
            <h2>{this.department}</h2>
            <button onClick={()=>this.changeDepartment()}>change</button>
        </div>
    )
}
}
export default StateComponent


/*function A(){
    let fname="peter"
    const [lname,setLname]=useState("")
    changeFname(){
        c.l("before update",fname) //peter
        fname="pete"
        c.l("after update",fname)//pete
    }
    changeLname(){
        c.l("before update",lname)//""
        setLname("henry")
        c.l("after update",lname)//henry
      
    }
    return(
        <h1>{fname} {lname}</h1> // peter  
        //peter henry
        <button>change fname</button>
        <button>change lname</button>
    )
}*/