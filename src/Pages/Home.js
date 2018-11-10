import React from "react";
import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Headroom from "../components/Headroom";
import Signup from "./Signup"


const Home = () => (

    <div>
        <Headroom>
        <Navbar />
        </Headroom>
        <Jumbotron />
        <div className="row">
         <div className="col" div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
        <div className="card"div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vh'}}>
        
        
        <h3>Welcome, <b>kneverTrap</b> </h3>
       </div>
        </div>
        </div>
    </div>

      


);

export default Home;