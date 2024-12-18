import React, { useState } from "react";
import Arrowl from "../asset/images/arrow_back.png";
import Arrowr from "../asset/images/arrow_forward.png";
import data from "../location.json"
import { useParams } from 'react-router-dom' 



    

const Carrousel = ({namealt}) => {
    const { id } = useParams() 

   const picture = data.find((pic) => pic.id === id ) 

  
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? picture.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === picture.pictures.length - 1 ? 0 : prevIndex + 1
    );
  }; 

  return (
    <div className="kasa-logement-caroussel" >
        
      <img onClick={handlePrev} className="kasa-arrow-left" src={Arrowl} alt="fleche droite"></img>
      
        <img
          src={picture.pictures[currentIndex]}
          alt={`${namealt} ${currentIndex + 1}`}
          className="kasa-log"
        />
         
      
      <img onClick={handleNext} className="kasa-arrow-right" src={Arrowr} alt="fleche droite"></img>
      <a className="carrousel-compteur">{currentIndex +1}/{picture.pictures.length}</a>
    </div>
    
  );
};

export default Carrousel;