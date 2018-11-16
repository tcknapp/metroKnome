import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About"
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Form from "./components/Form";
import Tools from "./Pages/Tools";
import Data from "./Pages/Data";
import Resources from "./Pages/Resources";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Headroom from "./components/Headroom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";



const App = () => (
  <Router>
    <div>
      <Headroom>
      </Headroom>
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Tools" component={Tools} />
        <Route exact path="/Data" component={Data} />
        <Route exact path="/Resources" component={Resources} />
      </Wrapper>
    </div>
  </Router>

  
);



export default App;
