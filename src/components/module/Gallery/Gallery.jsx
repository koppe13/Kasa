import React, { useState } from "react";
import Arrowl from "../../../asset/images/fleche-gauche.png";
import Arrowr from "../../../asset/images/fleche-droite.png";
import data from "../../../data/location.json";
import { useParams } from "react-router-dom";

const Gallery = ({ namealt }) => {
  const { id } = useParams();

  const getLogement = data.find((infoLogement) => infoLogement.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);
  //decompte de prevIndex (debut 0) a partir du nombre d'element du tableau (length) d'où les -1
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? getLogement.pictures.length - 1 : prevIndex - 1
    );
  };
  // si nextindex (fin 2) repart a nextindex 0 donc 1ere image comme debut de la serie
  const handleNext = () => {
    setCurrentIndex((nextIndex) =>
      nextIndex === getLogement.pictures.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <div className="kasa-logement-caroussel">
      <img
        onClick={handlePrev}
        className={`kasa-arrow-left ${
          getLogement.pictures.length === 1 ? "invisible" : ""
        }`}
        src={Arrowl}
        alt="fleche droite"
      ></img>

      <img
        src={getLogement.pictures[currentIndex]}
        alt={`${namealt} 'photo ${currentIndex + 1}'`}
        className="kasa-log"
      />

      <img
        onClick={handleNext}
        className={`kasa-arrow-right ${
          getLogement.pictures.length === 1 ? "invisible" : ""
        }`}
        src={Arrowr}
        alt="fleche droite"
      ></img>
      <p
        className={`carrousel-compteur ${
          getLogement.pictures.length === 1 ? "invisible" : ""
        }`}
      >
        {currentIndex + 1}/{getLogement.pictures.length}
      </p>
    </div>
  );
};

export default Gallery;
