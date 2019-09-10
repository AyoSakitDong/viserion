import React, { Component, Fragment } from "react";
import Card from "./ItemCard";
import Slider from "react-slick";
export class SlideProduk extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Fragment>
        <h3 style={{ margin: "1em 0 .5em .5em" }}>{this.props.title}</h3>
        <Slider {...settings}>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </Slider>
      </Fragment>
    );
  }
}

export default SlideProduk;
