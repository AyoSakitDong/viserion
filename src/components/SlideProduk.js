import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Card from "./ItemCard";
import Slider from "react-slick";
import { fetchObat } from "../redux/actions/uiActions";
import Spinner from "react-bootstrap/Spinner";
export class SlideProduk extends Component {
  componentDidMount() {
    this.props.fetchObat();
  }
  render() {
    const obat = this.props.obat;
    const mapObat = obat.map(data => {
      return (
        <div key={data.idObat}>
          <div style={{ padding: "1em" }}>
            <Card data={data} />
          </div>
        </div>
      );
    });
    const loading = this.props.loading;
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <Fragment>
        <h3 style={{ margin: "1em 0 .5em .5em" }}>{this.props.title}</h3>
        {loading ? (
          <Spinner animation="grow" />
        ) : (
          <Slider {...settings}>{mapObat}</Slider>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.ui.loading,
  obat: state.obat.listObat
});
const mapActionsToProps = {
  fetchObat
};
export default connect(mapStateToProps, mapActionsToProps)(SlideProduk);
