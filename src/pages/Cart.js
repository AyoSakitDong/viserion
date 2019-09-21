import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt as faTrash } from "@fortawesome/free-solid-svg-icons";
import "../style/cart.css";
export class Chart extends Component {
  constructor() {
    super();
    this.state = {
      cart: [
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
        { id: 4, name: "item1", price: "696969", rating: "3" },
        { id: 3, name: "item1", price: "696969", rating: "3" }
      ]
    };
  }
  render() {
    const title = {
      color: "#1EA62B",
      fontWeight: "bold"
    };
    const price = {
      color: "#1EA62B",
      fontWeight: "bold"
    };
    let i = 0;
    const cartMap = this.state.cart.length
      ? this.state.cart.map(item => {
          const price = {
            color: "#1EA62B",
            fontWeight: "bold"
          };
          return (
            <tr>
              <td>
                <div>
                  <img
                    src="https://via.placeholder.com/100x100"
                    alt="placeholder"
                  />
                  <span className="px-2">{item.name}</span>
                </div>
              </td>
              <td style={price}>{item.price}</td>
              <td>To do</td>
              <td style={price}>Rp. 5.2000.000,-</td>
              <td>
                <FontAwesomeIcon className="text-danger" icon={faTrash} />
              </td>
            </tr>
          );
        })
      : null;
    return (
      <main id="cart">
        <Container
          className="bg-white"
          style={{ paddingTop: "4em", paddingBottom: "1em", minHeight: "75vh" }}
        >
          <h3 style={title}>Keranjang</h3>
          <Table style={{ background: "#f6f6f6" }} hover>
            <thead>
              <tr>
                <th>Produk</th>
                <th>Harga</th>
                <th>Kuantitas</th>
                <th>Subtotal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>{cartMap}</tbody>
          </Table>
          <div align="right" className="my-3" style={price}>
            Total : 1298318932
          </div>
          <div className="d-flex justify-content-between">
            <Button variant="dark">Kembali</Button>
            <Button variant="success">Bayar</Button>
          </div>
        </Container>
      </main>
    );
  }
}

export default Chart;
