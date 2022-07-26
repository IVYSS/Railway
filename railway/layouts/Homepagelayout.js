import React from "react";
import Navbar from "../components/navbar/navbar";

const HomePageLayOut = ({ children }) => {
  return (
    <div className="content">
      <Navbar></Navbar>
      <div className="body">{children}</div>
      <p>test</p>
    </div>
  );
};

export default HomePageLayOut;
