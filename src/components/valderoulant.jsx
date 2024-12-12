import chevron from "../asset/images/arrow.png"
import React, { useState } from "react";


const Valderoulant = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Alterne l'état d'ouverture
    console.log("toggle collapse");
  };

  
    return (        
        <div className="kasa-val">
          <div className="kasa-valderoulant">
                <a href="/">Fiabilité</a>
                <button className="button" onClick={toggleCollapse}>
                    <img  src={chevron} alt={''}></img>
                </button>
          </div>
          <div className={`collapse-content ${isOpen ? "open" : ""}`}>
            <p>voici l'element deployé</p>
          </div>
        </div>
    )
}


export default Valderoulant