import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

export class Footer extends Component {
  render() {
    return (
      <footer style={{ backgroundColor: "#F6F6F6" }}>
        <Container id="footer">
          <Row md={6} className="py-5 text-center text-md-left">
            <Col>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              nunc libero, suscipit sed ligula id, cursus hendrerit urna.
              Quisque nec pretium justo, id lacinia velit.
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center pl-md-5 pt-3 pt-md-0"
            >
              <InputGroup style={{ width: "100%" }}>
                <Form.Control
                  placeholder="Masukan email anda"
                  aria-label="Pencarian"
                />
                <InputGroup.Append>
                  <Button variant="success">Berlangganan</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
          </Row>
        </Container>
        <div
          className="text-center"
          style={{
            backgroundColor: "white",
            fontSize: ".8em",
            padding: "1em 0"
          }}
        >
          <span>
            2019 © AyoSakitDong. All rights reserved. Developed by sadBoiGang
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
