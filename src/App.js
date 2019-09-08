import React from "react";
//
import "./components/css/App.css";
import Main from "./components/pages/main";

//
import { Switch, Route } from "react-router-dom";
//

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}
export default App;
