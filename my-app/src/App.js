import logo from './logo.svg';
import './App.css';
import Header from './components/Header'

import  {Todos}  from './components/Todos';
import { Footer } from './components/Footer';
import { useState } from "react";
import {Add} from './components/Add';
function App() {
  const onDelete =(todo)=>{
    console.log("i am on delete",todo);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }))
  }

 const addTodo=(title,desc)=>
 {
  console.log("i am adding ",title,desc);
  let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

  const myTodo={
    sno:sno,
    title:title,
    desc:desc
  }
  setTodos([...todos,myTodo])
 }
    const[todos,setTodos]=useState( [
      
    ]);
    return (
    <>
    <Header title="My Todolist"/>
    <Add addTodo={addTodo}/>
    <hr/>
    <Todos todo={todos} onDelete={onDelete}/>
    <Footer/>
    </>
    
    );
}

export default App;
