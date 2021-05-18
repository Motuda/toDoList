import React from "react";
import './NewTaskFields.css';

function NewTaskFields() {
    return (
      <div className="NewTaskField">
          <h2>Tarea a agregar</h2>
          <form className="NewTaskForm">
              <label htmlFor="newTask">Tarea</label>
              <input type="text" name="newTask" id="newTask" placeholder="¿Qué tienes que hacer?"></input>
              <label htmlFor="newTaskDate">¿Para cuándo es?</label>
              <input type="date" name="NewTaskDate" id="newTaskDate"></input>
              <label htmlFor="newTaskNote">Detalles a recordar</label>
              <textarea name="newTaskNote" id="newTaskNote" placeholder="Agrega una nota"></textarea>
              <label htmlFor="newTaskType">Tarea</label>
              <select name="newTaskType" id="newTaskType">
                <option value="diarias">Tareas diarias</option>
                <option value="compras">Compras</option>
                <option value="eventos">Eventos</option>
                <option value="especiales">Tareas especiales</option>
              </select>
          </form>
      </div>
    );
  }
  
  export default NewTaskFields;