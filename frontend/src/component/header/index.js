import React,{useState} from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
//component
import Modal from "../modal"
import Profile from "./profile"
//gambar
import Logo from "../../public/assets/logo.svg";
import DumbSound from "../../public/assets/dumbsound.svg";



const Index = () => {
  let login = false;

  const [modalShow,setModalShow]=useState({
    show:false,
    conter:0,
    option:0
  })

 const handeModal=(opsi)=>{
   setModalShow({show:true,conter:modalShow.conter+1,option:opsi})
 }

  const isLogin = (data) => {
    if (data) {
      return <Profile/>;
    } else {
      return (
        <>
          <Modal show={modalShow.show} counter={modalShow.conter} option={modalShow.option}/>
          <Button className="mr-3 sm-mt-1" size="sm" variant="outline-light" onClick={()=>handeModal(0)}>
            <span className="p-3">Login</span>
          </Button>
          <Button className="mr-3 sm-mr-1" size="sm" variant="outline-danger" onClick={()=>handeModal(1)}>
            <span className="p-2">Register</span>
          </Button>
        </>
      );
    }
  };

  return (
    <>
      <Navbar className="pt-3" expand="lg" fixed="top">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="#home">
          <img
            src={DumbSound}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="DumbSound"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="sm-mr-auto">{isLogin(login)}</Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Index;
