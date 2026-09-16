import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaCheck } from "react-icons/fa6";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [allTodos,setTodos] = useState([]);
  const [newTitle,setNewTitle] = useState("");
  const [newDescription,setNewDescription] = useState("");


  const handleAddTodo = () =>{
    let newTodoItem = {
      title:newTitle,
      description:newDescription
    };



    let  updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  };
  const handleDeleteTodo = (index)=>{
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index,1);
    localStorage.setItem('todolist',JSON.stringify(reducedTodo));

    setTodos(reducedTodo)
  }

  useEffect(()=>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }
  },[])

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      
      <div className='todo-wrapper'>
        <div className='Inputs'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text'value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}placeholder='Whats the task title?' />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text'value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder='Whats the Description?' />
          </div>
          <div className='todo-input-item'>
            <button type='button' onClick={handleAddTodo}className='PrimaryBtn'>ADD</button>
          </div>
        </div>

        <div className='btn-area'>
          <button 
            className={`secondary-btn ${!isCompleteScreen ? 'active' : ''}`} 
            onClick={() => setIsCompleteScreen(false)}
          >
            TO DO
          </button>
          <button 
            className={`secondary-btn ${isCompleteScreen ? 'active' : ''}`} 
            onClick={() => setIsCompleteScreen(true)}
          >
            Completed
          </button>
        </div>

        <div className='todo-list'>
          {allTodos.map((item, index) => {
  return (
    // 1. Outer wrapper added with the required 'key' prop
    <div className="todo-list-item" key={index}> 
      
      {/* 2. Added opening div to fix the mismatched closing tag */}
      <div className="todo-text"> 
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <div className="icon-area">
        <AiOutlineDelete className='icon'onClick={()=> handleDeleteTodo(index)} title='Delete?' />
        <FaCheck className='checkicon' title='Complete?' />
      </div>
      
    </div>
  );
})}
          
          
          
          
        </div>
      </div>
    </div>
  );
}

export default App;