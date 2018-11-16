import React from "react";
import Headroom from "../components/Headroom";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReactChartkick, { AreaChart, PieChart, LineChart } from 'react-chartkick';
import Chart from 'chart.js';

ReactChartkick.addAdapter(Chart);



const Data = () => (
    <div>
        <Headroom>
            <Navbar />
        </Headroom>
        <Jumbotron />
        <LineChart data={{"usage":"Workout", "data": {"2017-01-01": 3, "2017-01-02": 4}}}  />
    
        
        < Footer />

    </div>


);

export default Data;