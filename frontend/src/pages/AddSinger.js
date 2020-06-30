import React from "react";
import Header from "../component/header";
import Singer from "../component/singer"

const AddMusic = () => {
  document.title = "Music";
  return (
    <>
      <Header />
      <Singer/>
    </>
  );
};

export default AddMusic;
