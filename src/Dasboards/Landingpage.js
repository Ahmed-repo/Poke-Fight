import React from "react";
import { Link } from "react-router-dom";
import "../Components/Style/Landingpage.css";
import ButtonBases from "./ButtonBases";

const Landingpage = () => {
  return (
    <div className="landingpagecontainer">
      <div>
        <Link to="/pokemon/instructions">
          <ButtonBases />
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
