import React from "react";
import './Header.css';
import AddButton from "../AddButton/AddButton";

function Header() {
  return (
    <header className="Header">
         <h1>Anota así no te olvidas</h1>
         <AddButton />
    </header>
  );
}

export default Header;
