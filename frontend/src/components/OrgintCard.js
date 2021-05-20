import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

// card on home page
// currently displays name, email

const OrgintCard = (props) => {
  const { id, company_name, company_wiki } = props.orgint;
  return (
    <div className="item">
      
      <img className="ui avatar image" src={user} alt="user" />

      <div className="content">
       
        <Link
          to={{ pathname: `/orgints/${id}`, state: { orgint: props.orgint } }}
        >
          <div className="header">{company_name}</div>
          <div className="app-link">
          <div>{company_wiki}</div>
          </div>
        </Link>
        
      </div>
    
      <Link to={{ pathname: `/orgints/edit`, state: { orgint: props.orgint } }}>
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

export default OrgintCard;
