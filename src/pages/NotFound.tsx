import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>LIEUX FANTOME !</h1>
      <h2>ESSAYEZ DE RETOURNER VERS :</h2>
      <NavLink to="/"> HOME</NavLink>
      <br />
      <NavLink to="/"> DETAILS</NavLink>
    </div>
  );
};

export default NotFound;
