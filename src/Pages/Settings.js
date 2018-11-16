import React from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Headroom from '../components/Headroom'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Settings = () => (

    <div>
        <Headroom>
        <Navbar />
        </Headroom>

        
        <div className="col" div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50%' }}>
            <div className="card" div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vh', marginTop: '90px', padding: '10px', border: '2px solid black' }}>

                <div className="form">

                    <select class="custom-select">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>



                </div>


            </div>
        </div>




        < Footer />
    </div>



);

export default Settings;