import React from "react";
import "./Nav.scss";
export interface NavProps {
  active?: string;
}
const Nav = (props: NavProps) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">
            Divination
          </a>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="#" className="dropbtn">
            Spellcraft
          </a>
          <div className="dropdown-content">
            <a href="#">Link 4</a>
            <a href="#">Link 5</a>
            <a href="#">Link 6</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
