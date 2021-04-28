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
import HomePage from "./HomePage";
import Ouroboros from "./Ouroboros";
import Subdomains from "./Subdomains";

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

        </Switch>
        </Router>
        
<Subdomains />

<Ouroboros />
    </div>
    </div>
    
  );
}

export default App;
