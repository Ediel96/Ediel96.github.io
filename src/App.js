import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Layout from "./core/layout/Layout";
import Blog from "./pages/Blog";


export default function App() {
    
  return (
    <Router>
        <Layout/>
            <Switch>
                <Route  path="/home" component={Home}/>
                <Route  path="/blog" component={Blog}/>
                <Route  path="/" component={Home}/>
            </Switch>
    </Router>
  );
}

