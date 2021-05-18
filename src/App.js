import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import NotFount from "./pages/NotFount";

import './pages/style/App.css';



export default function App() {
    
  return (
    <Router>
      <Switch>
        <Route exact path="/my-skim" component={Blog}/>
        <Route exact path="/blog" component={Blogs}/>
        <Route exact path="/home" component={Home}/>
        <Route  path="/" component={Home}/>
        <Route component={NotFount}/>
      </Switch>
    </Router>
  );
}

