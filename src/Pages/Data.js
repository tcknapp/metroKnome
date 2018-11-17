import React from "react";
import ReactDom from 'react-dom';
import Headroom from "../components/Headroom";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Graphs from "../components/Graphs";
import { Doughnut, Line } from 'react-chartjs-2';



const data1 ={
    labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const data2 = {
    labels: ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Weekly Usage (mins)',
        fill: true,
        lineTension: 0.1,
        backgroundColor: '#7CFC00',
        borderColor: 'black',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'black',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [15, 29, 20, 21, 26, 45, 40]
      }
    ]
  };
  


const Data = () => (
    <div>
        <Headroom>
            <Navbar />
        </Headroom>
        <Jumbotron />
        <div className="col" div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
        <div className="card"div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vh', border: '2px solid black'}}>
        
        <h2>Data</h2>
        
        <div className="Time">
        Today's Goal:
        <Graphs />

     
        Weekly usage:
        <Line data={data2} />

           </div>
        
        
        
        </div>
        </div>
        <br /> <br /> <br /> <br /> <br />
        < Footer />

    </div>


);

export default Data;