import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const Regis = () => {
  return (
    <>
      <Modal.Header className="bg-dark text-light">
        <Modal.Title id="contained-modal-title-vcenter">
          Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              placeholder="Enter email"
              name="emial"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Full Name"
              name="fullName"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Control size="sm" as="select" name="gender">
              <option>Small select</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Phone"
              name="phone"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Address"
              name="address"
            />
          </Form.Group>
          <Button variant="danger" className="btn-block mb-3" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default Regis;
