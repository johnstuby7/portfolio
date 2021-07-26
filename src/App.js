import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, SkillSet, Contact, Resume } from "./components";
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/resume" exact component={() => <Resume />} />
          <Route path="/skillSet" exact component={() => <SkillSet />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;