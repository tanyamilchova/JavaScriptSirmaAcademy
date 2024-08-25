import { useEffect, useState } from 'react';
import './App.css'
import Timer from './components/Timer'
import ToDoList from './components/ToDoList'
import Header from './components/Header';
import { AuthContext } from './contexts/AuthContext';
const authUrl='https://dummyjson.com/auth/login';


function App() {
  const[auth, setAuth]=useState({});

  // useEffect( ()=> {
  //     ( ()=>{
  //     })();
  // }, []);
  useEffect( ()=>{

  fetch(authUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      })
    })
    .then(res => res.json())
    .then(result =>
      setAuth(result));

}, []);


  return (
    <AuthContext.Provider value={auth}>
  <Header
    email={auth.email}
  />
   <Timer/>
   <ToDoList/>
   
    </AuthContext.Provider>
  )
}

export default App
