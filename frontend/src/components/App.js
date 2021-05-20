import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/backend";
import "./App.css";
import Header from "./Header";

import AddHumint from "./AddHumint";
import HumintList from "./HumintList";
import HumintDetail from "./HumintDetail";
import EditHumint from "./EditHumint";

import AddOrgint from "./AddOrgint";
import OrgintList from "./OrgintList";
import OrgintDetail from "./OrgintDetail";
import EditOrgint from "./EditOrgint";

import HomePage from "./HomePage";
import Ouroboros from "./Ouroboros";


function App() {
  // const LOCAL_STORAGE_KEY = "humints";
  const [humints, setHumints] = useState([]);

  //RetrieveHumints
  const retrieveHumints = async () => {
    const response = await api.get("/humints");
    return response.data;
  };

  const addHumintHandler = async (humint) => {
    console.log(humint);
    const request = {
      id: uuid(),
      ...humint,
    };

    const response = await api.post("/humints", request);
    console.log(response);
    setHumints([...humints, response.data]);
  };

  const updateHumintHandler = async (humint) => {
    const response = await api.put(`/humints/${humint.id}`, humint);
    const { id } = response.data;
    setHumints(
      humints.map((humint) => {
        return humint.id === id ? { ...response.data } : humint;
      })
    );
  };

  const removeHumintHandler = async (id) => {
    await api.delete(`/humints/${id}`);
    const newHumintList = humints.filter((humint) => {
      return humint.id !== id;
    });

    setHumints(newHumintList);
  };

  useEffect(() => {

    // const retriveHumints = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveHumints) setHumints(retriveHumints);

    const getAllHumints = async () => {
      const allHumints = await retrieveHumints();
      if (allHumints) setHumints(allHumints);
    };

    getAllHumints();
  }, []);

  useEffect(() => {

    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(humints));

  }, [humints]);




    //RetrieveOrgints

    const [orgints, setOrgints] = useState([]);
    
    const retrieveOrgints = async () => {
      const response = await api.get("/orgints");
      return response.data;
    };
  
    const addOrgintHandler = async (orgint) => {
      console.log(orgint);
      const request = {
        id: uuid(),
        ...orgint,
      };
  
      const response = await api.post("/orgints", request);
      console.log(response);
      setOrgints([...orgints, response.data]);
    };
  
    const updateOrgintHandler = async (orgint) => {
      const response = await api.put(`/orgints/${orgint.id}`, orgint);
      const { id } = response.data;
      setOrgints(
        orgints.map((orgint) => {
          return orgint.id === id ? { ...response.data } : orgint;
        })
      );
    };
  
    const removeOrgintHandler = async (id) => {
      await api.delete(`/orgints/${id}`);
      const newOrgintList = orgints.filter((orgint) => {
        return orgint.id !== id;
      });
  
      setOrgints(newOrgintList);
    };
  
    useEffect(() => {
  
  
      const getAllOrgints = async () => {
        const allOrgints = await retrieveOrgints();
        if (allOrgints) setOrgints(allOrgints);
      };
  
      getAllOrgints();
    }, []);
  
    useEffect(() => {

  
    }, [orgints]);

  return (
    
    <div className="ui container">
      <div className="ui container center">
      
      <Router>
        <Header />
        <Switch>
        <Route        
        path="/"
        exact
        render={() => (
          <HomePage/>
        )}/>
        
          <Route
            path="/humints/"
            exact
            render={(props) => (
              <HumintList
                {...props}
                humints={humints}
                getHumintId={removeHumintHandler}
              />
            )}
          />
          <Route
            path="/humints/add"
            render={(props) => (
              <AddHumint 
              {...props} 
              addHumintHandler={addHumintHandler} />
            )}
          />

          <Route
            path="/humints/edit"
            render={(props) => (
              <EditHumint
                {...props}
                updateHumintHandler={updateHumintHandler}
              />
            )}
          />

          <Route path="/humints/:id" 
          component={HumintDetail}
       
           />

          <Route
            path="/orgints/"
            exact
            render={(props) => (
              <OrgintList
                {...props}
                orgints={orgints}
                getOrgintId={removeOrgintHandler}
              />
            )}
          />
          <Route
            path="/orgints/add"
            render={(props) => (
              <AddOrgint 
              {...props} 
              addOrgintHandler={addOrgintHandler} />
            )}
          />

          <Route
            path="/orgints/edit"
            render={(props) => (
              <EditOrgint
                {...props}
                updateOrgintHandler={updateOrgintHandler}
              />
            )}
          />

          <Route path="/orgints/:id" 
          component={OrgintDetail}
       
           />

        </Switch>
        </Router>
        

<Ouroboros />
    </div>
    </div>
    
  );
}

export default App;
