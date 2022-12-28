function TodoChild(props){

    return (
        
        <>
        {console.log("child is rendered")}
            <h1 style={{ color: "red" }}>Todolist</h1>
           
            <hr />
            {
                !props.todos.length ?
                    <h3>There is no todo...</h3> : (
                        <ol>
                            {
                                props.todos?.map((todo) => (
                                    <li key={todo.id}>
                                     

                                        <span style={{ textDecoration: todo?.completed ? "line-through" : "" }}>{todo.todo}</span>
                                        {` `}
                                       
                                    </li>
                                ))
                            }
                        </ol>
                    )
            }
        </>
    )

}
export default TodoChild