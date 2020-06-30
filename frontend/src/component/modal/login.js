import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <>
      <Modal.Header className="bg-dark text-light">
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark text-light">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              placeholder="Enter email"
              name="email"
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
          <Button variant="danger" className="btn-block mb-3" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default Login;
