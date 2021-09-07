import React from "react";
import MyEditor from "./components/editor";
import NavBar from "./components/navbar";
import RaiseTicketForm from "./components/raiseTicketForm";
import Table from "./components/table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import SignUp from "./components/signup";
import Example from "./components/dropdown";
import {useState, useEffect} from "react";
import LogInAdmin from "./components/LogInAdmin";
import TicketBody from "./components/TicketBody";
import LogInEmp from "./components/LogInEmp";



function App() {
  return (
    <Router>
    <div>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/employee" ><RaiseTicketForm /></Route>
        <Route path="/admin" ><Table /></Route>
        <Route path="/loginadmin" ><LogInAdmin /></Route>
        <Route path="/loginemployee" ><LogInEmp /></Route>
        <Route path="/" ><SignUp /></Route>
      </Switch>
    {/* <NavBar /> */}
    {/* <RaiseTicketForm /> */}
    {/* <Table /> */}
    {/* <SignUp /> */}
    {/* <LogInAdmin /> */}
    {/* <Example /> */}
    {/* <TicketBody /> */}
    {/* <LogInEmp /> */}
     </div>
     </Router>
  );
}

export default App;
