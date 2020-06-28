import React from "react";
import Header from "../component/header";
import Jumbotron from "../component/jumbotron";
import SectionList from "../component/containerMusic";
import Loader from "react-loader-spinner";

//css
import "./styles/loader.css";

const Dashboard = () => {
  const load = (
      <Loader
        className="loading"
        type="Bars"
        color="#FFFFFF"
        height={100}
        width={100}
        timeout={10000} 
      />
  );
  return (
    <>
      {load}
      <Header />
      <Jumbotron />
      <SectionList />
    </>
  );
};

export default Dashboard;
