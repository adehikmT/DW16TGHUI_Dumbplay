import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { MdAttachFile } from "react-icons/all";

const FormMusic = () => {
  return (
    <>
      <Form>
        <Row>
          <Col className="col-9">
            <Form.Control type="text" placeholder="Enter Title" name="title" />
          </Col>
          <Col className="col-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFileLangHTML"
                name="attache"
              />
              <label
                className="custom-file-label"
                for="customFileLangHTML"
                data-browse="Attache"
              >
                <MdAttachFile />
              </label>
            </div>
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
