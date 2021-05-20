import React from "react";
import { Link } from "react-router-dom";
import OrgintCard from "./OrgintCard";

const OrgintList = (props) => {
  console.log(props);

  const deleteOrgintHandler = (id) => {
    props.getOrgintId(id);
  };

  const renderOrgintList = props.orgints.map((orgint) => {
    return (

      <OrgintCard
        orgint={orgint}
        clickHander={deleteOrgintHandler}
        key={orgint.id}
      
      />
    );
  });
  
  return (
    <div className="ui main">

      <h2>
        ORGINT Entries
        <Link to="/orgints/add">
          <button className="ui inverted button secondary right">Add Entry</button>
        </Link>
      </h2>

      <div className="ui celled list">{renderOrgintList}</div>

    </div>
    
  );
};

export default OrgintList;
