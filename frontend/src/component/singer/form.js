import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const FormMusic = () => {
  return (
    <>
      <Form>
        <Row>
          <Col className="col-12">
            <Form.Control type="text" placeholder="Enter Title" name="title" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control type="text" placeholder="Enter Year" name="Year" />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control size="md" as="select">
              <option>Small select</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 mt-3">
            <Form.Control type="text" placeholder="Enter Link Music" name="" />
          </Col>
        </Row>
        <Button variant="danger" className="btn-block mt-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormMusic;
