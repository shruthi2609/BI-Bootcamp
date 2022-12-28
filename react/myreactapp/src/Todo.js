import React, { Component } from "react"
import TodoChild from "./TodoChild";

class Todolist extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            newTodo: {

            },
        };
    }


    addTodo() {

        if (this.state.newTodo) {
           /* this.state.todos.push({
                id: this.state.todos.length + 1,
                todo: this.state.newTodo,
                completed: false
            })*/
            this.setState({todos:[...this.state.todos,{
                id: this.state.todos.length + 1,
                todo: this.state.newTodo,
                completed: false
            }]})
        }
        this.setState({ newTodo: "" })
    }
    deleteTodo(delTodo) {
        const fileredTodos = this.state.todos.filter(currentTodo => currentTodo !== delTodo)
        this.setState({ todos: fileredTodos })

    }

    completeTodo(id) {
        const updatedTodos = this.state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo })
        // const updatedTodos = this.state.todos.map(todo => todo.id === id ? { ...todo, completed: todo.completed } : { ...todo })
        this.setState({ todos: updatedTodos })
    }
    useCaseFun(){
        this.setState({todos:[this.state.todos]})
    }

   shouldComponentUpdate(newProps, newState) {

        if ( newState.todos === this.state.todos) {
            console.log("no state change")
            console.log("current",this.state.todos)
            console.log("new",newState)
           return false
        }
        else {
            console.log("no state change")
            console.log("current",this.state.todos)
            console.log("new",newState.todos)
   
            return true
       }
     }
    render() {
        console.log("parent is rendered")
        return (
        
            <>
                <h1 style={{ color: "red" }}>Todolist</h1>
                <input type="text"  onChange={(e) => 
                {
                   this.setState({ newTodo: e.target.value })}} placeholder="Enter a newTodo..." />
                <button onClick={() => this.addTodo()}>Add </button>
                <button onClick={()=>this.useCaseFun()}>use case</button>
                <TodoChild todos={this.state.todos}></TodoChild>
                        
                
            </>
        )
    }
}



export default Todolist