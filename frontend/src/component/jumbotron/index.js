import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

//css custom
import "./jumbotron.css";

const Index = () => {
  return (
    <>
      <Jumbotron className="bgImage">
        <Container className="text-center">
          <h1 className="dumbSound">Connect on DumbSound</h1>
          <p className="desSound">
            iscovery, Stream, and share a constantly expanding mix of music <br/> from
            emerging and major artists around the world
          </p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Index;
