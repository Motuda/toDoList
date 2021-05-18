import React from "react";
import './AddButton.css';

const addTask = () => {
 
};

function AddButton() {
  return (
    <button type="button" className="AddButton" onClick= { addTask }>
        +
    </button>
  );
}

export default AddButton;