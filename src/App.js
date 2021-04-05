import React from "react";

import { Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
//Utilities
import NRoute from "./components/utilities/NormalRoute";

//Pages
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import AOS from "aos";

AOS.init();

const App = () => {
  return (
    <Router>
      <Switch>
        <NRoute path="/notfound" component={NotFound} />
        <NRoute path="/" component={Home} exact />
        <NRoute path="/contact" component={Contact} exact />
        <NRoute path="/about" component={About} exact />

        <Redirect to="/notfound" />
      </Switch>
    </Router>
  );
};

export default App;
