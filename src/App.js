import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import Heroes from "./components/heroes";
import About from "./components/about";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/heroes" component={Heroes} />
            <Route path="/about" component={About} />
            <Redirect from="/" exact to="/heroes" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
