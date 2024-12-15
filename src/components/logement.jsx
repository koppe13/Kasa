
import Arrowl from "../asset/images/arrow_back.png";
import Arrowr from "../asset/images/arrow_forward.png";
import Host from "../asset/images/Host.png";
import Valderoulant from "./valderoulant.jsx"
import Vector from "../asset/images/Vector.png"
import { useParams } from 'react-router-dom'
import data from "../location.json"



function Logement () {
    const { id } = useParams() 

    const appart = data.find((loge) => loge.id === id )
    
    return (
        
    <div className="kasa-affichage" > 
        
        <div className="kasa-arrow">
                <img className="kasa-arrow-left" src={Arrowl}></img>
                <img className="kasa-arrow-right" src={Arrowr}></img>
            </div>
        <div className="kasa-logement-caroussel" key={appart.id}>
            <img className="kasa-log" key={appart.title} src={appart.cover} alt={appart.title}></img>
            <div className="kasa-arrow">
                <img className="kasa-arrow-left" src={Arrowl}></img>
                <img className="kasa-arrow-right" src={Arrowr}></img>
            </div>
        </div>
        <div className="kasa-log-title">
            <div className="kasa-log-presentation">
                <div className="kasa-log-item">
                    <h3 className="kasa-log-h">{appart.title}</h3>
                    <a className="kasa-log-a">Paris, Île-de-France</a>
                </div>
                <div className="Kasa-tag-presentation">
                    <div className="kasa-tag"><a>Cosy</a></div>
                    <div className="kasa-tag"><a>Canal</a></div>
                    <div className="kasa-tag"><a>Paris 10</a></div>
                </div>
            </div>
            <div className="kasa-log-present">
                <div className="kasa-log-user">
                    <div className="kasa-user">
                        <a className="kasa-user-name">Alexandre Dumas</a>
                        <a className="kasa-user-name">Dumas</a>
                    </div>
                    <img className="kasa-img-user" src={Host}></img>    
                </div>
                <div className="kasa-star">
                    <div className="kasa-star-ligne">
                        <img src={Vector}></img>
                        <img src={Vector}></img>
                        <img src={Vector}></img>
                        <img src={Vector}></img>
                        <img src={Vector}></img>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="kasa-log-valeurs">
            <Valderoulant />
            <Valderoulant />
        </div>
    
    </div>
    )};
      







export default Logement