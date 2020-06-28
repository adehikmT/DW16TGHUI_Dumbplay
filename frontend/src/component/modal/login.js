import React,{useState} from "react"
import {Modal,Form,Button} from "react-bootstrap" 

 const Login=()=>{
     return (
         <>
        <Modal.Header className="bg-dark text-light" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
                <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control size="sm" type="email" placeholder="Enter email" />
                <Form.Text className="text-danger">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm" type="password" placeholder="Password" />
                <Form.Text className="text-danger">
                Password Not Null
                </Form.Text>
            </Form.Group>
            <Button variant="danger" className="btn-block mb-3" type="submit">
                Submit
            </Button>
                {/* <Form.Text className="text-center">
                Don't have Account ? click <span style={{cursor:"pointer"}} onClick={()=>handeModal(1)}>Here</span>
                </Form.Text> */}
            </Form>
        </Modal.Body>
        </>
     )
 }

export default Login