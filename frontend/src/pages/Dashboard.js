import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
//child
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import SectionList from "../component/containerMusic";
import LodBars from "../component/loader/Bars";
import PlayMusic from "../component/playMusic"

const Dashboard = () => {
  document.title = "DumbSound";
  const [loadPage, setLoadPage] = useState(true);
  setTimeout(() => {
    setLoadPage(false);
  }, 3000);

  return (
    <>
      {loadPage ? (
        <LodBars to={3000} />
      ) : (
        <>
          <Header />
          <Parallax className="" y={[-20, 50]} tagInner="figure">
            <Jumbotron />
          </Parallax>
          <SectionList />
          <PlayMusic/>
        </>
      )}
    </>
  );
};

export default Dashboard;
