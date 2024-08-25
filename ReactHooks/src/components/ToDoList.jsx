import { useEffect,useState } from "react";
import ToDoListItem from "./ToDoListItem";

const baseUrl='https://dummyjson.com/todos';

export default function ToDoList() {
const[todos,setTodos]=useState([]);

console.log(todos);


  useEffect(()=>{
    async function fetchTodos() {
      const response=await fetch(baseUrl);
      const data=await response.json();
      setTodos(data.todos);   
    }

    fetchTodos();
  },[]);

  const todoClickHandler=(todoId)=>{
    setTodos(oldTodos => oldTodos.map( todo => todo.id === todoId ? {... todo,  completed: !todo.completed} : todo)) 
    
    // Вземи тодо,id сравни го с това, което търся-   todo => todo.id === todo.id ?
    // Ако е същото {... todo} shallow copy направи му копие 
    //  вземи му completed и го промени на обратното {... todo,  completed: !todo.completed}
    // : todo ако не е това, което търся върни нова референция към старото непроменено
  }
  // const todoElements=todos.map(todo=> <li key={todo.id} >{todo.todo}</li>); //todo is the argument in the JSON
  return (
    <>
        <h2>Todo List</h2>
        <ul>
          {/* { todos.map(todo=> <li key={todo.id} >{todo.todo}</li>) } */}
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