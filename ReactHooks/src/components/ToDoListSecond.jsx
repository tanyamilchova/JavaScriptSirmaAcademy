import { useEffect,useState } from "react";
import ToDoListItem from "./ToDoListItem";

const baseUrl='https://dummyjson.com/todos';

export default function ToDoList() {
// const[todos,setTodos]=useState([]);
// const [todos, setTodos] =useFetch(baseUrl, []);
const [todos, setTodos] =useFetch(baseUrl, [], result=> result.todos);// reusable state=> state.any

  const todoClickHandler=(todoId)=>{
    setTodos(oldTodos => oldTodos.map( todo => todo.id === todoId ? {... todo,  completed: !todo.completed} : todo)) 
}
  
  return (
    <>
        <h2>Todo List</h2>
        <ul>
          {/* { todos.map(todo=> <li key={todo.id}  >{todo.todo}</li>) } */}
          { todos.map(todo=> (
             <ToDoListItem
              key={todo.id}
              id={todo.id}
              title={todo.todo}
              isCompleted={todo.completed}
              onClick={todoClickHandler}
           />
         )) }
        </ul>
    </>
  );
}