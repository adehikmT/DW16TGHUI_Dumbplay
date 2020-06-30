import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "./form"

const Index = () => {
  return (
    <>
      <Container className="justify-content-center container" fluid>
        <Row className="justify-content-center mt-5">
          <Col md={4} xs={10} lg={10}>
            <Form />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
