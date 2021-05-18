import React from "react";
import './TaskCard.css';

function TaskCard() {
    return (
      <div className="TaskCard">
        <div className="border">
          <p><b>Tipo de tarea</b></p>
          <button type="button" className="btnDeleteTask">x</button>
        </div>
        <div className="cardBody">
          <h3>Acá va el título</h3>
          <p>Acá van las notas, detalles, aclaraciones, etc</p>
          <span>3/05/2021</span>
        </div>
         
      </div>
    );
  }
  
  export default TaskCard;