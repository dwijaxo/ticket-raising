import React from "react";
import MyEditor from "./components/editor";
import NavBar from "./components/navbar";
import RaiseTicketForm from "./components/raiseTicketForm";
import Table from "./components/table";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { auth } from "./firebase";
import SignUp from "./components/signup";
import Example from "./components/dropdown";
import {useState, useEffect} from "react";
import LogInAdmin from "./components/LogInAdmin";



function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/"> </Route>
      </Switch>
    {/* <NavBar /> */}
    {/* <RaiseTicketForm /> */}
    {/* <Table /> */}
    <SignUp />
    {/* <LogInAdmin /> */}
    {/* <Example /> */}
     </div>
     </Router>
  );
}

export default App;
