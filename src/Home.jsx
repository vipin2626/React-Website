import React from "react";
import web from "../src/Images/hero.png";
import Common from "./Common";

const Home = () => {
  return (
    <Common
      name="Grow your Buisness with"
      imgsrc={web}
      visit="/service"
      btname="Get started"
    />
  );
};

export default Home;
