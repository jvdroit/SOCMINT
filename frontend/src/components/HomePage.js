import React from "react";
import { Link } from "react-router-dom";
import humints from "../images/humints.png";
import documentation from "../images/documentation.png";
import orgint from "../images/orgint.png";


// page that has more info per entry
// update here to shot more detailss
const HomePage = () => {
  
  return (
    
    <div className="ui center aligned three column grid">
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>

  <div className="row">

    <div className="column">
      <div className="ui vertical fluid menu">
      <Link to="/humints/">
      <div className="ui card centered">
        <div className="image">
          <img src={humints} alt="humints" />
        </div>
        <div className="content">
          <div className="header">HUMINT</div>
        </div>
      </div>
      </Link>
      </div>
    </div>


    <div className="column">
      <div className="ui vertical fluid menu">
      <Link to="/orgints/">
      <div className="ui card centered">
        <div className="image">
          <img src={orgint} alt="orgint" />
        </div>
        <div className="content">
          <div className="header">ORGINT</div>
        </div>
      </div>
      </Link>
      </div>
    </div>

    <div className="column">
      <div className="ui vertical fluid menu">
        
      <div className="ui card centered">
        <div className="image">
          <img src={documentation} alt="documentation" />
        </div>
        <div className="content">
          <div className="header">DOCUMENTATION</div>
        </div>
      </div>
      </div>
    </div>

  </div>

<div className="Row"></div>  
<div className="Row"></div>

</div>

  );
};

export default HomePage;
