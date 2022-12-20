import React, { useState } from "react";
class LCM extends React.Component{
constructor(props){
super(props)
this.state={
    data:"initial value",
    description:""
}
}

/*static getDerivedStateFromProps(props,state){
console.log("DS")
return {description:props.desc,data:props.desc}
}*/
componentDidMount=()=>{
   /* console.log("Did mount")*/
}
updateState=()=>{
    this.setState({data:"final value"})
}
shouldComponentUpdate(newProps,newState){
/*console.log("new state",newState)
console.log("current state",this.state)*/
if(newState.data===this.state.data){
return false
}
else{
    return true
}
}

render(){
    console.log("child Render")
    return(
        <div>
            <h1>Props {this.props.pname}</h1>
            <h2>State {this.state.data}</h2>
            <h2>State {this.state.description}</h2>
            <button onClick={()=>this.updateState()}>update</button>
            
        </div>
    )
}
}
export default LCM