import chevron from "../../../asset/images/chevron.png";
import React, { useState } from "react";

const Collapse = ({ nameVariable, Variable }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Alterne l'état d'ouverture du collapse
    setIsRotated(!isRotated); //idem pour la rotation de la fleche
  };

  return (
    <div className="kasa-val">
      <div className="kasa-collapse">
        <p>{nameVariable}</p>
        <button className="button" onClick={toggleCollapse}>
          <img
            className={`button ${isRotated ? "ouvre" : "ferme"}`}
            src={chevron}
            alt={"chervon anime"}
          ></img>
        </button>
      </div>
      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        <li className="collapse-text">{Variable}</li>
      </div>
    </div>
  );
};

export default Collapse;
