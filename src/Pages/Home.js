import React from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Headroom from "../components/Headroom";
import Signup from "./Signup";
import Footer from "../components/Footer";
import {Button} from 'react-bootstrap';


const Home = () => (

    <div>
        <Headroom>
        <Navbar />
        </Headroom>
        <Jumbotron />
        <div className="row">
         <div className="col" div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
        <div className="card"div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vh', border: '2px solid black'}}>
        
        <br />
        <h3>Welcome back,</h3>
        <div className="showUser">
        {/* this.state.userName */}
            <b>kneverTrap</b> 
        </div>
        <div className="showData" style={{justifyContent:'left'}}>
        <h4>You've metroKnome'd for:</h4> 
        {/* (insert total time) */} 
        <p>today:</p>
        {/* insert day use */}
        <p>week:</p>
        {/* insert week use */}
        <p>month:</p>
        {/* insert month use */}
        <b>total:</b>
        {/* insert total use */}
        </div>
        <hr />
        Check your data?
        <Button type="submit" className="btn btn-outline-dark"><a href="/Data" style={{textDecoration:"none"}}>Data</a></Button>
       <br />
       </div>
        </div>
        </div>
        <Footer />
    </div>

      


);

export default Home;