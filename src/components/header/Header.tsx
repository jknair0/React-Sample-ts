import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <FontAwesomeIcon
          icon={faCheck}
          style={{
            color: "#7c4dff",
            fontSize: "1.5em",
            marginBottom: 10,
            marginRight: 10,
            marginLeft: "-1.5em",
          }}
        />
        <h3 className="headerTitle">todo list</h3>
      </header>
    );
  }
}

export default Header;
