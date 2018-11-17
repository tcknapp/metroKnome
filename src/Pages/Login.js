import React from "react";
import Jumbotron from "../components/Jumbotron";
import {Form, FormGroup, Col, ControlLabel, FormControl, Button} from "react-bootstrap";





const Login = () => (
    <div>
        <Jumbotron />
<center>
        <Form horizontal>
  <FormGroup controlId="formHorizontalUsername">
    <Col componentClass={ControlLabel} sm={8}>
      username
    </Col>
    <Col sm={4}>
      <FormControl type="email" placeholder="username" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={8}>
      password
    </Col>
    <Col sm={4}>
      <FormControl type="password" placeholder="password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={6}>
    {/* handleformsubmit */}
      <Button type="submit" className="btn btn-outline-dark" style={{marginRight:"4px"}}><a href="/Home" style={{textDecoration:"none"}}>Log in</a></Button>
      <Button type="submit" className="btn btn-outline-danger"><a href="/Signup"style={{textDecoration:"none"}}>Sign up</a></Button>
    </Col>
  </FormGroup>
</Form>
</center>
        
        </div>


);

export default Login;