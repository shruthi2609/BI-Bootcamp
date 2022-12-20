import React from "react";
class CounterApp extends React.Component{
constructor(props){
super(props)
this.state={
    count:0,
    fname:"peter"
}
}
changeName=()=>{
    this.setState({fname:"pete"})
}
changeCount=()=>{
    this.setState({count:this.state.count+1})
}
render(){
    console.log(this.props)
    return(
        <div>
            <h1>State {this.state.fname}</h1>
            <h2>State :{this.state.count} </h2>
            <button onClick={()=>this.changeName()}>change name</button>
            <button onClick={()=>this.changeCount()}>change count</button>
            
        </div>
    )
}
}
export default CounterApp

/**
 * const [count,setCount]=useState(0)
 */