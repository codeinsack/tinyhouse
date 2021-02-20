import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Listings, Listing, User, Home, Host, NotFound } from "./sections";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./styles/index.css";

const client = new ApolloClient({
  uri: "/api",
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/host" component={Host}></Route>
        <Route exact path="/listing/:id" component={Listing}></Route>
        <Route exact path="/listings/:location" component={Listings}></Route>
        <Route exact path="/user/:id" component={User}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
