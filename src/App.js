import React from "react";
import Header from "../src/Header/Header"
import NewTaskFields from "../src/NewTaskFields/NewTaskFields";
import './App.css';
import TaskList from "./TaskList/TaskList";

const firebaseConfig = {
  apiKey: "AIzaSyBbQPqQ1xPaSlg2SYQXIl9CZE3bNPKyEnI",
  authDomain: "todolist-motuda.firebaseapp.com",
  projectId: "todolist-motuda",
  storageBucket: "todolist-motuda.appspot.com",
  messagingSenderId: "572602396151",
  appId: "1:572602396151:web:4ccc2485127281917952f2"
};

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
