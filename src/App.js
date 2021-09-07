import React from "react";
import RaiseTicketForm from "./components/raiseTicketForm";
import Table from "./components/table";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/signup";
import LogInAdmin from "./components/LogInAdmin";
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
