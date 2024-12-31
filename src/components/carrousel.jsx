import React, { useState } from "react";
import Arrowl from "../asset/images/arrow_back.png";
import Arrowr from "../asset/images/arrow_forward.png";
import data from "../location.json"
import { useParams } from 'react-router-dom' 



    

const Carrousel = ({namealt}) => {
    const { id } = useParams() 

   const picture = data.find((pic) => pic.id === id ) 

  
    const [currentIndex, setCurrentIndex] = useState(0);
//decompte de prevIndex (debut 0) a partir du nombre d'element du tableau (length) d'où les -1
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? picture.pictures.length - 1 : prevIndex - 1
    );
  };
// si nextindex (fin 2) repart a nextindex 0 donc 1ere image comme debut de la serie
  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === picture.pictures.length - 1 ? 0 : nextIndex + 1
    );
  }; 

  return (
    <div className="kasa-logement-caroussel" >
      <img onClick={handlePrev} className={`kasa-arrow-left ${picture.pictures.length === 1? 'invisible' : '' }`} src={Arrowl} alt="fleche droite"></img>
      
        <img
          src={picture.pictures[currentIndex]}
          alt={`${namealt} ${currentIndex + 1}`}
          className="kasa-log"
        />
         
     
      <img onClick={handleNext} className={`kasa-arrow-right ${picture.pictures.length === 1? "invisible" : '' }`} src={Arrowr} alt="fleche droite"></img>
      <p className={`carrousel-compteur ${picture.pictures.length === 1? "invisible" : '' }`}>{currentIndex +1}/{picture.pictures.length}</p>
    </div>
    
  );
};

export default Carrousel;