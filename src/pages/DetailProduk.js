import React, { Component, Fragment } from "react";
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
import ImageZoom from "react-medium-image-zoom";
import "../style/tab.css";
import Spinner from "react-bootstrap/Spinner";
import { fetchObatById } from "../redux/actions/uiActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
export class DetailProduk extends Component {
  constructor() {
    super();
    this.state = {
      jumlah: 0
    };
  }
  componentDidMount() {
    this.props.fetchObatById(this.props.match.params.id, this.props.history);
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
    value &&
      value !== "NaN" &&
      this.setState({
        [name]: parseInt(value)
      });
  };
  render() {
    const obat = this.props.obat;
    const dataObat = obat[0] ? obat[0] : { img: "#null" };
    const loading = this.props.loading;
    const descBox = {
      border: "1px solid #6fcf97",
      borderTop: "0",
      padding: "1em"
    };
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
        <Container
          className="bg-white"
          style={{ paddingTop: "2em", paddingBottom: "2em" }}
        >
          {loading ? (
            <Spinner animation="grow" />
          ) : (
            <Fragment>
              <Row>
                <Col sm="5">
                  <ImageZoom
                    image={{
                      src: dataObat.img,
                      alt: "Cute Cat",
                      className: "img",
                      style: { width: "425px" }
                    }}
                  />
                </Col>
                <Col sm="7">
                  <div>
                    <p style={{ ...title, border: "10px" }}>
                      {dataObat.namaObat}
                    </p>
                    <div style={{ position: "inline-block" }}>
                      <Row>
                        <Col>
                          <span className="text-warning">
                            <FontAwesomeIcon icon={farStar} />
                            <FontAwesomeIcon icon={farStar} />
                            <FontAwesomeIcon icon={farStar} />
                            <FontAwesomeIcon icon={farStar} />
                            <FontAwesomeIcon icon={farStar} />
                          </span>
                          <span style={{ marginLeft: "1em" }}>
                            (Belum ada Ulasan)
                          </span>
                        </Col>
                      </Row>
                    </div>
                    <hr></hr>
                    <div style={{ position: "block" }}>
                      <p style={price}>Rp {dataObat.harga},-</p>
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
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.jumlah}
                            aria-describedby="basic-addon1"
                            className="text-center"
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
                    <p>tulisan</p>
                  </div>
                </Col>
              </Row>
              <Tabs
                style={{ marginTop: "1em" }}
                defaultActiveKey="home"
                transition={false}
                id="noanim-tab-example"
              >
                <Tab eventKey="home" title="Deskripsi">
                  <div style={descBox}>{dataObat.deskripsi}</div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <div style={descBox}>duar</div>
                </Tab>
              </Tabs>
            </Fragment>
          )}
        </Container>
      </main>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.ui.loading,
  obat: state.obat.listObat
});
const mapActionsToProps = {
  fetchObatById
};
export default withRouter(
  connect(mapStateToProps, mapActionsToProps)(DetailProduk)
);
