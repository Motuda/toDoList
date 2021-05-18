import React from "react";
import './TaskList.css';
import TaskCard from '../TaskCard/TaskCard';

function TaskList() {
    return (
      <div className="TaskList">
         <ul>
             <TaskCard />
         </ul> 
      </div>
    );
  }
  
  export default TaskList;