import React from "react";
import { Col, Card } from "react-bootstrap";
import LoadAu from "../loader/Audio";

import "./list.css";

const Cards = () => {
  return ( 
    <>
      <Col lg={2} className="mt-5">
        <Card className="musicCard bg-dark">
          <LoadAu to={15000} />
          <Card.Img className="p-2" variant="top" src="holder.js/100px160" />
          <span className="musicTitle">
            Circel <small className="year">2000</small>
          </span>
          <small className="singer">Bobmarley</small>
        </Card>
      </Col>
    </>
  );
};

export default Cards;
