import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Heroes from "./components/heroes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <main className="container">
          <Heroes />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
