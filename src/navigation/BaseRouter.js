import React from "react";
import { Switch, Route } from "react-router-dom";
import Covid from "../pages/Covid";
import Programming from "../pages/Programming";
import Saved from "../pages/Saved";
import Home from "../pages/Indonesia";
import Search from "../pages/Search";

export default function BaseRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/saved" component={Saved} />
      <Route path="/programming" component={Programming} />
      <Route path="/covid" component={Covid} />
      <Route path="/search/:searchParams" component={Search} />
    </Switch>
  );
}
