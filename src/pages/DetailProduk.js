import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
export class DetailProduk extends Component {
  constructor() {
    super();
    this.state = {
      jumlah: 0
    };
  }
  handlePlus = () => {
    this.setState({
      jumlah: this.state.jumlah + 1
    });
  };
  handleMin = () => {
    if (this.state.jumlah > 0) {
      this.setState({
        jumlah: this.state.jumlah - 1
      });
    }
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: parseInt(value)
    });
  };
  render() {
    const title = {
      fontWeight: "bold",
      fontSize: "36px",
      color: "#000000"
    };
    const price = {
      fontWeight: "bold",
      fontSize: "48px",
      color: "#1EA62B",
      marginBottom: "0"
    };
    const secondary = {
      fontSize: "18px",
      color: "#5E5E5E"
    };
    return (
      <main>
        <Container className="bg-white" style={{ paddingTop: "4em" }}>
          <Row>
            <Col sm="5"></Col>
            <Col sm="7">
              <div>
                <p style={title}>Nama Obat</p>
                <div style={{ position: "inline-block" }}>
                  <Row>
                    <Col sm="3">
                      <div className="text-warning">
                        <FontAwesomeIcon icon={farStar} />
                        <FontAwesomeIcon icon={farStar} />
                        <FontAwesomeIcon icon={farStar} />
                        <FontAwesomeIcon icon={farStar} />
                        <FontAwesomeIcon icon={farStar} />
                      </div>
                    </Col>
                    <Col sm="9">
                      <p>(Belum ada Ulasan)</p>
                    </Col>
                  </Row>
                </div>
                <hr></hr>
                <div style={{ position: "block" }}>
                  <p style={price}>Rp52.000,-</p>
                  <p style={secondary}>Tersedia > 200 stok barang</p>
                  <p style={secondary}>Masukkan jumlah yang diinginkan</p>
                </div>
                {/* <CounterInput max={10} min={5} onChange={ (value) => { console.log(value) } } value={5} /> */}
                <Row>
                  <Col sm="3">
                    <InputGroup className="mb-3">
                      <InputGroup.Prepend>
                        <Button onClick={this.handleMin} variant="success">
                          -
                        </Button>
                      </InputGroup.Prepend>
                      <FormControl
                        name="jumlah"
                        onChange={this.handleChange}
                        value={this.state.jumlah}
                        aria-describedby="basic-addon1"
                      />
                      <InputGroup.Append>
                        <Button onClick={this.handlePlus} variant="success">
                          +
                        </Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="success" block>
                      Beli sekarang
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="dark" block>
                      Tambah ke Keranjang
                    </Button>
                  </Col>
                </Row>
                <p>ada tulisan</p>
              </div>
            </Col>
          </Row>
          <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
          >
            <Tab eventKey="home" title="Deskripsi">
              <div>wajwjaw</div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <div>duar</div>
            </Tab>
          </Tabs>
        </Container>
      </main>
    );
  }
}

export default DetailProduk;
