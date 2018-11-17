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
            <div className="card" div style={{ display: 'flex', width: '100vh', marginTop: '90px', padding: '10px', border: '2px solid black' }}>

                <p>Customize your settings and goals</p>


                <div className="form-group col-4">
                    <p><b>Who is using mK?</b></p>
                    <select class="custom-select" id="whoUses">
                        <option selected></option>
                        <option value="1">Self</option>
                        <option value="2">Group/Band</option>
                        <option value="3">Manager</option>
                        <option value="4">Other</option>
                    </select>
                </div>
                <div className="form-group col-4">
                    <p><b>Primary use:</b></p>
                    <select class="custom-select" id="primaryUse">
                        <option selected></option>
                        <option value="1">Practice</option>
                        <option value="2">Production</option>
                        <option value="3">Learning</option>
                        <option value="4">Other</option>
                    </select>
                </div>
                <br />

                <h3>Set your Goals</h3>
                How often would you like to play?
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" /> Daily
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" /> Weekly
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option3" /> Monthly
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option4" /> None
                    </label>
                </div>
                <br />

                <div class="form-group">
                    What is your desired amount of play?
                    <label for="daily-input"></label>
                    <div class="daily col-4">
                        <input class="form-control" type="number" placeholder="" id="daily-input" />
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" /> Minutes
                    </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" /> Hours
                        </label>
                        </div>
                        </div>
                        <br />
                        <center>
                        <button type="button" class="btn btn-outline-success col-2"><a href='/Home'>Save</a></button>
                        </center>
                    </div>
                </div>
            </div>
            <br /> <br /> <br /> <br /> <br />
            < Footer />
        </div>



        );
        
export default Settings;