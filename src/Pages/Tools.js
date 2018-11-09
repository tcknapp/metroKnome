import React from "react";
import Metronome from "../components/Metronome";
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";


const Tools = () => (
    <div>
    <Navbar />
    <div className="card">
    <h3><center>metronome</center></h3>
     <Metronome />
     
    <br />
     <div className="card">
     <center>
     <h3>guitar tuner</h3>
     <p>(Coming soon...)</p>
     </center>
     </div>
    
    <br />
     <div className="card">
     <center>
     <p>(Coming soon...)</p>
     </center>
     </div>

    <br />
     <div className="card">
     <center>
     <p>(Coming soon...)</p>
     </center>
     </div>
     </div>


    </div>
       

);

export default Tools;