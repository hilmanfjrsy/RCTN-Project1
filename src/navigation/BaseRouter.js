import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Covid from "../pages/Covid";
import Programming from "../pages/Programming";
import Saved from "../pages/Saved";

export default function BaseRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/saved" component={Saved}/>
      <Route path="/programming" component={Programming}/>
      <Route path="/covid" component={Covid} />
    </Switch>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}