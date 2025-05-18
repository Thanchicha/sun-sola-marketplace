import React from "react";
import Narbar from "../0-Component/Navbar";
import Slogan from "./Component/Home/Slogan"
import Stat from "./Component/Home/Stat";
import About from "./Component/Home/About"
import Type from "./Component/Home/Type";

function Home() {
  return (
    <>
      <Narbar />
      <div>
        <div className="w-full bg-[#fcf995] text-[#193c76] text-right">
          <Slogan />
          <Stat />
        </div>
        <About />
        <Type />
      </div>
    </>
  );
}

export default Home;
