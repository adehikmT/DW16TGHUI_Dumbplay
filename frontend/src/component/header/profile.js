import React, { useState } from "react";
import { Image, Row, Col } from "react-bootstrap";
import { MdPayment,FaUserAlt,AiOutlineTransaction ,MdLibraryMusic,FaUserTie,AiOutlineLogout} from "react-icons/all";

import userImg from "../../public/assets/index.png";

import "./header.css";

const Down = (down) => {
  if (down) {
    return (
      <div>
        <div className="profile-square">
          <div className="profile-arrow" />
          <div className="profile-dropdown-group" style={{ marginTop: 10 }}>
            <div className="profile-dropdown-icon">
              <FaUserAlt className="icon" size={22} />
            </div>
            <div className="profile-dropdown-link">
              <span className="submenu">Profile</span>
            </div>
          </div>
          <div>
            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <MdPayment className="icon" size={24} />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu">Pay</span>
              </div>
            </div>
          </div>
          <div>
            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <AiOutlineTransaction className="icon" size={25} />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu">Transcation</span>
              </div>
            </div>

            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <MdLibraryMusic className="icon" size={24} />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu">Add Music</span>
              </div>
            </div>

            <div className="profile-dropdown-group">
              <div className="profile-dropdown-icon">
                <FaUserTie className="icon" size={22} />
              </div>
              <div className="profile-dropdown-link">
                <span className="submenu">Add Artis</span>
              </div>
            </div>
          </div>
          <hr style={{ marginBottom: "10px",backgroundColor:"white" ,height:"1px" }} />
          <div className="profile-dropdown-group" style={{ marginBottom: "-8px" }}>
            <div className="profile-dropdown-icon mt-1 mb-2">
              <AiOutlineLogout className="icon" size={24} />
            </div>
            <div className="profile-dropdown-link mb-2" style={{marginTop:-1}}>
              <span className="submenu">Logout</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const Profile = () => {
  const [show, setShow] = useState(false);

  const handelClick = () => {
    setShow(true);
  };

  if (show) {
    window.onclick = (e) => {
      handleClose(e);
    };
  }

  const handleClose = (e) => {
    if (!e.target.matches(".profilrImg")) {
      setShow(false);
    }
  };

  return (
    <>
      <Row>
        <Col lg={1}>
          <Image src={userImg} className="profilrImg" onClick={handelClick} />
          {Down(show)}
        </Col>
      </Row>
    </>
  );
};

export default Profile;
