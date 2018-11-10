import React from "react";
import Searchbar from "../components/Searchbar";
import Navbar from "../components/Navbar";
import Headroom from "../components/Headroom";


const Resources = () => (
   <div>
       <Headroom>
       <Navbar />
        </Headroom>
     <Searchbar />
   <div> <br /> <br />
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

    </div>



);

export default Resources;