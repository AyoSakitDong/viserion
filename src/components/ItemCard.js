import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style/card.css";
import { Link } from 'react-router-dom';
export class ItemCard extends Component {
  render() {
    return (
      <div style={{ padding: "1em" }}>
        <Link to={'/detailproduk'}>
          <Card className="mx-auto">
            <Card.Img variant="top" src="https://via.placeholder.com/100x80" />
            <Card.Body>
              <Card.Title style={{ margin: 0 }}>Nama obat</Card.Title>
              <div>
                <strong>Rp. 52.000,-</strong>
                <div className="text-warning">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={farStar} />
                  <FontAwesomeIcon icon={farStar} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}

export default ItemCard;
