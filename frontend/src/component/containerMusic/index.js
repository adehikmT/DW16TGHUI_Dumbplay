import React from "react";
import { Container, Row } from "react-bootstrap";
import ListCard from "./card";

// css
import "./list.css";

const Index = () => {
  return (
    <Container fluid className="cofl">
      <Row>
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
