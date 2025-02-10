import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const LayOuts = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default LayOuts;
