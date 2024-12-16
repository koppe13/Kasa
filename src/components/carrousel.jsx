import React, { useState } from "react";
import Arrowl from "../asset/images/arrow_back.png";
import Arrowr from "../asset/images/arrow_forward.png";
import data from "../location.json"
import { useParams } from 'react-router-dom' 
{/*import "./Carousel.css"; // Pour styliser le carousel */}


    

const Carrousel = ({ pictures }) => {
    const { id } = useParams() 

   {/*} const picture = data.find((pic) => pic.id === id ) */}

  
    const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  }; 

  return (
    <div className="kasa-logement-caroussel" >
        <div className="kasa-arrow">
      <button onClick={handlePrev} className="kasa-arrow-left" src={Arrowl}></button>
      
        {/*<img
          src={data.id[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="kasa-log"
        /> */}
      </div>
      <button onClick={handleNext} className="kasa-arrow-right">{Arrowr}</button>
    </div>
  );
};

export default Carrousel;