import React from "react";
import Header from "../component/header";
import Music from "../component/music"

const AddMusic = () => {
  document.title = "Music";
  return (
    <>
      <Header />
      <Music/>
    </>
  );
};

export default AddMusic;
