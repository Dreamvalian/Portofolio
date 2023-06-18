import React from "react";
import { Link } from "react-router-dom";

const Button = ({ link, buttonName }) => {
  return (
    <Link to={link} className="button" href="#">
      {buttonName}
    </Link>
  );
};

export default Button;
