import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Headroom from "../components/Headroom";
import Signup from "./Signup";
import Footer from "../components/Footer";
import {Button} from 'react-bootstrap';
import WOW from "wowjs";

const Line = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: '100%',
        }}
    />
);


class Home extends Component {
  
    componentDidMount() {
      new WOW.WOW().init();

    }

    
render () {
    return (
    <div>
        <Headroom>
        <Navbar />
        </Headroom>
        <Jumbotron />
        <div className="row">
         <div className="col" div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
        <div className="card"div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vh', border: '2px solid black'}}>
        
        <br />

        <div className="showUser" style={{color:'blue'}}>
        {/* this.state.userName */}
            <h2><b>kneverTrap</b></h2> 
        </div>

        <div className="showData" style={{justifyContent:'left'}}>

        <h4>You've metroKnome'd for:</h4> 

    
        <h3>Today:</h3>
        {/* insert day use */}
        <p className="wow fadeIn delay-1s" style={{animationDelay: '2s', color: 'green'}}>10min 28sec</p>

        <Line color="black" />

        <h3>Week:</h3>
        <p className="wow fadeIn delay-1s" style={{animationDelay: '2s', color: 'green'}}>3hrs 18min</p>
        {/* insert week use */}

        <Line color="black" />

        <h3>Month:</h3>
        <p className="wow fadeIn delay-1s" style={{animationDelay: '2s', color: 'green'}}>8hrs 10min</p>
        {/* insert month use */}

        <Line color="black" />

        <h2>Total:</h2>
        <p className="wow fadeIn delay-1s" style={{animationDelay: '2s', color:'green'}}>16hrs 3min 22sec</p>
        {/* insert total use */}

        <Line color="black" />

        
        </div>
        <hr />
        Check your data?
        <Button type="submit" className="btn btn-outline-dark"><a href="/Data" style={{textDecoration:"none"}}>Data</a></Button>
       <br />
       </div>
        </div>
        </div> <br /> <br /> <br /> <br /> <br />
        <Footer />
    </div>

    )
}
}    



export default Home;