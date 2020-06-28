import React from "react";
import { Image, Row, Col } from "react-bootstrap";

import userImg from "../../public/assets/index.png";

import "./header.css"

const Profile = () => {
  return (
    <>
      <Row>
        <Col lg={1}>
          <Image src={userImg} className="profilrImg"/>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
