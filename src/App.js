import React, { useState } from 'react';
import data from "./data.json";

import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

import './App.css';

function App() {
  const [ toDoList, setToDoList ] = useState(data);//возвращается массив. Первая переменная это текущее значение, вторая это функция которая обновляет текущее значение
  
  const handleToggle = (id) => {

    let mapped = toDoList.map(task => {
      return task.id === +id ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
console.log(toDoList.length);
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
