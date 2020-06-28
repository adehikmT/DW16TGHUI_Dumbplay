import React from "react";
import { Col, Card } from "react-bootstrap";
import Loader from "react-loader-spinner";

import "./list.css"

const Cards = () => {
  const load = (
    <Loader
      className="loaded"
      type="Audio"
      color="#FFFFFF"
      timeout={10000} 
    />
);
  return (
    <>
      <Col lg={2}>
        <Card className="musicCard">
        {load}
          <Card.Img className="p-2" variant="top" src="holder.js/100px160" />
              <span className="musicTitle">Circel <small className="year">2000</small></span>
              <small className="singer">Bobmarley</small>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
