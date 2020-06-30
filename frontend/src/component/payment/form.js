import React from "react";
import { Form, Button } from "react-bootstrap";
import {MdAttachFile} from "react-icons/all"

const FormPay = () => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter nomor Rekening"
            name="norek"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
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
              <MdAttachFile/>
            </label>
          </div>
        </Form.Group>
        <Button variant="danger" className="btn-block mb-3" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default FormPay;
