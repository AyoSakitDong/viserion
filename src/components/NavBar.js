import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import { NavLink, Link, withRouter } from "react-router-dom";
import { logoutUser } from "../redux/actions/userActions";
import { connect } from "react-redux";

export class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ fontWeight: "bold" }}>
              LOGO
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-toggler"
            data-toggle="collapse"
            aria-expanded="false"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Navbar.Toggle>
          <Navbar.Collapse id="interfest-navs">
            <NavDropdown title="Kategori">
              <Link to="/kategori1" className="dropdown-item">
                Kategori1
              </Link>
              <Link to="/kategori1" className="dropdown-item">
                Kategori1
              </Link>
              <Link to="/kategori1" className="dropdown-item">
                Kategori1
              </Link>
            </NavDropdown>
            <Form inline style={{ width: "100%", margin: "0 .5em" }}>
              <InputGroup style={{ width: "100%" }}>
                <Form.Control placeholder="Pencarian" aria-label="Pencarian" />
                <InputGroup.Append>
                  <Button variant="success">Button</Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            {!this.props.user.authenticated ? (
              <Nav>
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </Nav>
            ) : (
              <Link to="/" onClick={this.props.logoutUser}>
                {this.props.user.userInfo.nama}
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  ui: state.ui
});
const mapActionsToProps = {
  logoutUser
};
export default withRouter(connect(mapStateToProps, mapActionsToProps)(NavBar));
