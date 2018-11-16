import React from "react";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import Headroom from "../components/Headroom";
import Footer from "../components/Footer";


const Resources = () => (
   <div>
       <Headroom>
       <Navbar />
        </Headroom>
        <br /> <br /> <br />
     <Searchbar />
   <div> 
    <div className="card">
    <div className="carousel">
    <h3>Youtube</h3>
    
    </div>
    </div>

    <div className="card">
    <div className="carousel">
    <h3>Reddit</h3>
    </div>
    </div>

    </div>
    <Footer />

    </div>



);

export default Resources;