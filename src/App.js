import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Proyectos from "./containers/Proyectos/Proyectos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/proyectos" exact component={Proyectos} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
