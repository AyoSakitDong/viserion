import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Promotion from "../components/Promotion";
import Kategori from "../components/Kategori";
import SlideProduk from "../components/SlideProduk";
export class Home extends Component {
  render() {
    return (
      <main>
        <Container className="bg-white">
          <Promotion />
          <Kategori />
          <SlideProduk title="Produk populer" />
          <SlideProduk title="Terbaru" />
          <br />
          <br />
        </Container>
      </main>
    );
  }
}

export default Home;
