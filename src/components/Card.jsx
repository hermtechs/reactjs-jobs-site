import React from "react";
// import HomeCards from "./HomeCards";
const Card = ({ children, bg = "bg-red-100 p-6 rounded-lg shadow-md" }) => {
  return <div className={`${bg} rounded-lg shadow-md`}>{children}</div>;
};
export default Card;
