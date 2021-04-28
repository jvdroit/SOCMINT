import React from "react";
import { Link } from "react-router-dom";
import HumintCard from "./HumintCard";

const HumintList = (props) => {
  console.log(props);

  const deleteHumintHandler = (id) => {
    props.getHumintId(id);
  };

  const renderHumintList = props.humints.map((humint) => {
    return (

      <HumintCard
        humint={humint}
        clickHander={deleteHumintHandler}
        key={humint.id}
      
      />
    );
  });
  
  return (
    <div className="ui main">

      <h2>
        HUMINT Entries
        <Link to="/humints/add">
          <button className="ui inverted button secondary right">Add Entry</button>
        </Link>
      </h2>

      <div className="ui celled list">{renderHumintList}</div>

    </div>
    
  );
};

export default HumintList;
