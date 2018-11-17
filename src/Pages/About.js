import React from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const About = () => (

    <div>
        <Navbar />
        <Jumbotron />

         <div className="col" div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50%'}}>
        <div className="card"div style={{display: 'flex',  justifyContent:'center', alignItems:'center', width: '100vh', padding: '10px', border: '2px solid black'}}>
        
       
       
        <h2>What is metroKnome?</h2>
        <p>
            metroKnome was created for Musical Artists, Visionaries, and Hobbyists of varying skill levels. At it's core, it is a tool for users to track and monitor productivity in their musical creation journey. For the amateur, it may be difficult, frustrating, and disheartening when learning a new instrument or working with your first DAW. For the experienced, "Through the Fire and Flames" (DragonForce) will take some practice no matter what your natural guitar talent level is. For music to be great, it takes time and practice. When using metroKnome, productivity is tracked, analyzed and delivered to the user through data and visulizations to show their progress. Users can set goals and reminders to help them stay on track for their tracks. Whether you are just picking up an instrument or curious how much time your band is actually putting in work, metroKnome will tick for you.
            
      </p>
        </div>
        </div>
       
        

    <br /> <br /> <br /> <br /> <br />
     < Footer />
    </div>
      


);

export default About;