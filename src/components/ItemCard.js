import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/card.css";
import { Link } from "react-router-dom";
export class ItemCard extends Component {
  render() {
    const { idObat, namaObat, deskripsi, img, harga } = this.props.data;
    return (
      <div>
        <Link to={`/detailproduk/${idObat}`}>
          <Card className="mx-auto">
            <Card.Img
              variant="top"
              src={img}
              style={{ width: "auto", height: "150px" }}
            />
            <Card.Body>
              <Card.Title style={{ margin: 0 }}>{namaObat}</Card.Title>
              <div>
                <strong>Rp. {harga},-</strong>
                <div className="text-warning">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={farStar} />
                  <FontAwesomeIcon icon={farStar} />
                </div>
                <p>{deskripsi}</p>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}

export default ItemCard;
