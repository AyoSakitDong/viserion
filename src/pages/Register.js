import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      gender: "male"
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const title = {
      fontWeight: "bold",
      fontSize: "2em",
      color: "#6FCF97"
    };
    return (
      <main>
        <Container className="bg-white h-100" style={{ padding: "9em 0" }}>
          <Row>
            <Col
              md={{ span: 4, offset: 4 }}
              style={{
                background: "#F9F9F9",
                boxShadow: "0px 4px 12px -5px rgba(0, 0, 0, 0.2)",
                padding: "1.5em"
              }}
            >
              <p style={title}>Register</p>
              <Form>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Input your full name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    minLength="6"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formGroupGender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    required
                    as="select"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Control>
                </Form.Group>
                <Button
                  variant="success"
                  type="submit"
                  style={{
                    width: "100%"
                  }}
                >
                  Register
                </Button>
                <p
                  className="color-primary"
                  style={{ textAlign: "center", marginTop: ".5em" }}
                >
                  <Link to="/login">Sudah punya akun?</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Register;
