//import Listappart from "../listappart";
import Arrowl from "../asset/images/arrow_back.png";
import Arrowr from "../asset/images/arrow_forward.png";
import Host from "../asset/images/Host.png";
import Valderoulant from "../components/valderoulant.jsx"
import Vector from "../asset/images/Vector.png"
import data from "../asset/location.json";


function Logement () {

    return (
    <div className="kasa-affichage"> 

    
        <div className="kasa-logement-caroussel">
            <img className="kasa-log" key={data.id} src={data.cover} alt={data.title}></img>
            <div className="kasa-arrow">
                <img className="kasa-arrow-left" src={Arrowl}></img>
                <img className="kasa-arrow-right" src={Arrowr}></img>
            </div>
        </div>
        <div className="kasa-log-title">
            <div className="kasa-log-presentation">
                <div className="kasa-log-item">
                    <h3 className="kasa-log-h">Cozy loft on the Canal Saint-Martin</h3>
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
                        <a className="kasa-user-name">Alexandre</a>
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
      );





}

export default Logement