import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Movies from "./components/movies.jsx";
import Rentals from "./components/navigation/rentals";
import Customers from "./components/navigation/customers";
import NotFound from "./components/navigation/notFound";
import Navbar from "./components/navigation/navbar";
import MovieFrom from "./components/movieFrom";
import LoginFrom from "./components/navigation/loginFrom.jsx";
import RegisterForm from "./components/navigation/registerForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginFrom} />
          <Route path="/movies/:id" component={MovieFrom} />
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
