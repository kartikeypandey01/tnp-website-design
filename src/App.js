import React from 'react';
import { Routes } from 'react-router-dom';
import { Route} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Login from "./Login";

const App = () => {
  return (
  <>
  <Routes>
    <Route exact path = "/login" element = {<Login/>} />
    <Route exact path = "/" element = {<Home/>} />
    <Route exact path = "dashboard" element = {<Dashboard/>} />
    <Route exact path = "profile" element = {<Profile/>} />
    <Route exact path = "*" element = {<Home/>} />
     {/*<Route exact path = "/help" component = {help} />*/}
    </Routes>
  </>
  )
}

export default App