import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Tools from "./Pages/Tools";
import Data from "./Pages/Data";
import Resources from "./Pages/Resources";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Headroom from "./components/Headroom";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
// import Metronome from "./components/Metronome/Metronome";
// import Container from "./components/Container";


const App = () => (
  <Router>
    <div>
      <Headroom>
      </Headroom>
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Tools" component={Tools} />
        <Route exact path="/Data" component={Data} />
        <Route exact path="/Resources" component={Resources} />
      </Wrapper>
      <Footer />
    </div>
  </Router>

  
);



export default App;
