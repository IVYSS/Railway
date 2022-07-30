import React from "react";
import Navbar from "../components/navbar/navbar";

const HomePageLayOut = ({ children }) => {
  return (
    <div className="content">
      <div className="body">{children}</div>
    </div>
  );
};

export default HomePageLayOut;
