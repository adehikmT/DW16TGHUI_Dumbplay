import React from "react";
import { Container, Row } from "react-bootstrap";
import ListCard from "./card";

// css
import "./list.css";

const Index = () => {
  return (
    <Container className="cofl">
      <Row className="mt-5">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </Row>
    </Container>
  );
};

export default Index;
