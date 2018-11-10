import React, { Component } from "react";
import "./Form.css";
import Jumbotron from "../Jumbotron";
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from "react-bootstrap";


class Signup extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    userEmail: "",
    password: ""
    
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.firstName || !this.state.lastName) {
      alert("Please fill out all fields!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.firstName}`
      );
    } else {
      alert(`Thanks for joining ${this.state.userName}`);
    }

    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      userEmail: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <Jumbotron />
        <center>
        <p>
          Welcome {this.state.userName}
        </p>
        <FormGroup className="form">
        <Col componentClass={ControlLabel} sm={4}>
         <div style={{float:"left"}}>
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          </div>
          <div style={{float:"left"}}>
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          </div>
          
          <input
            value={this.state.userEmail}
            name="userEmail"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.userName}
            name="userName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button className="btn btn-sm btn-outline-dark" onClick={this.handleFormSubmit}>Submit</button>
        </Col>
        </FormGroup>
        </center>
      </div>
    );
  }
}

export default Signup;
