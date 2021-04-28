import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

// card on home page
// currently displays name, email

const HumintCard = (props) => {
  const { id, name, email } = props.humint;
  return (
    <div className="item">
      
      <img className="ui avatar image" src={user} alt="user" />

      <div className="content">
       
        <Link
          to={{ pathname: `/humints/${id}`, state: { humint: props.humint } }}
        >
          <div className="header">{name}</div>
          <div className="app-link">
          <div>{email}</div>
          </div>
        </Link>
        
      </div>
    
      <Link to={{ pathname: `/humints/edit`, state: { humint: props.humint } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>


      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i>


    </div>
  );
};

export default HumintCard;
