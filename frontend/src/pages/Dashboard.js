import React from "react";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import SectionList from "../component/containerMusic";
import LodBars from "../component/loader/Bars";
import { Parallax } from "react-scroll-parallax";

const Dashboard = () => {
  document.title = "DumbSound";
  return (
    <>
      <LodBars to={10000} />
      <Header />
      <Parallax className="" y={[-20, 50]} tagInner="figure">
        <Jumbotron />
      </Parallax>
      <SectionList />
    </>
  );
};

export default Dashboard;
