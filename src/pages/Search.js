import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../components/ItemCard";
export class Search extends Component {
  constructor() {
    super();
    this.state = {
      result: [
        {
          id: 1,
          name: "item1",
          price: "696969",
          rating: "3"
        },
        {
          id: 2,
          name: "item1",
          price: "696969",
          rating: "3"
        },
        {
          name: "item1",
          price: "696969",
          rating: "3"
        },
        { id: 3, name: "item1", price: "696969", rating: "3" },
        { id: 4, name: "item1", price: "696969", rating: "3" },
        { id: 5, name: "item1", price: "696969", rating: "3" },
        { id: 6, name: "item1", price: "696969", rating: "3" }
      ]
    };
  }
  render() {
    const title = {
      color: "#1EA62B",
      fontWeight: "bold"
    };
    let i = 1;
    const mapResult = this.state.result ? (
      this.state.result.map(item => {
        const style = {
          width: "33%",
          padding: "1em"
        };
        return (
          <div style={style} key={i++}>
            <Card item={item} />
          </div>
        );
      })
    ) : (
      <div className="mx-auto">
        <h3>Item tidak ditemukan</h3>
      </div>
    );
    return (
      <main>
        <Container
          className="bg-white"
          style={{ paddingTop: "4em", minHeight: "75vh" }}
        >
          <h3 style={title}>Hasil Pencarian</h3>
          <Row>
            <Col className="d-flex justify-content-start flex-wrap">
              {mapResult}
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default Search;
