import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, withRouter } from "react-router-dom";
import { loginUser } from "../redux/actions/userActions";
import { connect } from "react-redux";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };
  render() {
    const title = {
      fontWeight: "bold",
      fontSize: "2em",
      color: "#6FCF97"
    };
    return (
      <main className="h-75">
        <Container className="bg-white h-100" style={{ paddingTop: "9em" }}>
          <Row>
            <Col
              md={{ span: 4, offset: 4 }}
              style={{
                background: "#F9F9F9",
                boxShadow: "0px 4px 12px -5px rgba(0, 0, 0, 0.2)",
                padding: "1.5em"
              }}
            >
              <p style={title}>Login</p>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label className="color-primary">
                    Email address
                  </Form.Label>
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
                  <Form.Label className="color-primary">Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <div className="color-primary">
                  <Link to="/forgotPass">Lupa kata sandi?</Link>
                </div>
                <Button
                  variant="success"
                  type="submit"
                  style={{
                    width: "100%"
                  }}
                >
                  Login
                </Button>
                <p
                  className="color-primary"
                  style={{ textAlign: "center", marginTop: ".5em" }}
                >
                  <Link to="/register">Tidak punya akun?</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user,
  ui: state.ui
});
const mapActionsToProps = {
  loginUser
};
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login));
