import React from "react";
import Header from "./Header/Header"
import NewTaskFields from "../src/NewTaskFields/NewTaskFields";
import './App.css';
import TaskList from "./TaskList/TaskList";

function App() {
  return (
    <div className="App">
     <Header />
     <NewTaskFields />  
     <TaskList />   
    </div>
  );
}

export default App;
