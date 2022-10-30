import React from "react";
import { Hero, Navbar } from "./index";

const Main = () => {
  return (
    <div className="grid grid-cols-1 h-[100vh] ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Main;
