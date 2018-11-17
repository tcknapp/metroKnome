import React from "react";
import Metronome from "../components/Metronome";
import Headroom from "../components/Headroom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Tools = () => (
    <div>
    <Headroom>
    <Navbar />
    </Headroom>
    <br/> <br/> <br />
    <div className="card">
    <h3><center>metronome</center></h3>
     <Metronome />
     
    <br />
     <div className="card">
     <center>
     <h3>guitar tuner</h3>
     <p>(Coming soon...)</p>
     <img src="../images/guitarmk.png"></img>
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

    <br /> <br /> <br /> <br /> <br />
     < Footer />


    </div>
       

);

export default Tools;