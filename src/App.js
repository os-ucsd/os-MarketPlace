import React from "react";
import Projects from "./components/project";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Forms from "./components/form";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Projects} />
        <Route path="/form" component={Forms} />
      </Router>
    </div>
  );
}

export default App;
