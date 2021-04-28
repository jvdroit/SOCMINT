import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <div className="ui fixed menu">
        
    <div className="ui container center">

     <div className="app-link">

      <h1>Human Intelligence Narrowing Tool Set</h1>
      
    </div> 
    </div>
    </div> 
    
    </Link>
  );
};

export default Header;
