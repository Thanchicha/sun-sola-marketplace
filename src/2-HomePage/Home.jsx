import React from "react";
import Narbar from "../0-Component/Navbar";
import Slogan from "./Component/Home/Slogan";
import Stat from "./Component/Home/Stat";
import Recommend from "./Component/Home/Recommend";
import Banner from "./Component/Home/Banner";
import About from "./Component/Home/About";
import Type from "./Component/Home/Type";
import System from "./Component/Home/System";
import Size from "./Component/Home/Size";

function Home() {
  return (
    <>
      <Narbar
        icon={
          <img
            src="/images/icons/sunsolaLogo.png"
            alt="logo"
            width="78"
          />
        }
        line={{ borderLeft: "2px solid white" }}
        page="Home"
      />
      <div>
        <Slogan />
        <Stat />
        <Recommend />
        <Banner />
        <About />
        <Type />
        <System />
        <Size />
      </div>
    </>
  );
}

export default Home;
