import chevron from "../asset/images/arrow.png"
import React, { useState } from "react";
import data from "../location.json"
import { useParams } from 'react-router-dom'

const Valderoulant = ({nameVariable, Variable}) => {

    const { id } = useParams()
    const appart = data.find((loge) => loge.id === id )
  

  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Alterne l'état d'ouverture du collapse
    setIsRotated(!isRotated); //idem pour la rotation de la fleche
  }
  
     return (        
        <div className="kasa-val" >
          <div className="kasa-valderoulant">
          <a>{nameVariable}</a>
                <button className="button" onClick={toggleCollapse}>
                    <img className={`button ${isRotated ? "ouvre" : "ferme"}`} src={chevron} alt={'chervon anime'}></img>
                </button>
          </div>
          <div className={`collapse-content ${isOpen ? "open" : ""}`}>
          
             <li className="collapse-text">{Variable}</li>
          
          </div>
        </div>
    )

  };

export default Valderoulant