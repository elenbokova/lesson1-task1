import React from "react";
import logo from "../assets/logomain.svg"

function Header({title}) {
    return (
        <header>
            <img src={logo} alt="/" width="200px"/>
            <p>{title}</p>
        </header>
    );
}

export default Header;