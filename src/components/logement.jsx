
import Arrowl from "../asset/images/arrow_back.png";
import Arrowr from "../asset/images/arrow_forward.png";
import Host from "../asset/images/Host.png";
import Valderoulant from "./valderoulant.jsx"
import Vector from "../asset/images/Vector.png"
import { useParams } from 'react-router-dom'
import data from "../location.json"
import Carrousel from "../components/carrousel.jsx"


function Logement () {
    const { id } = useParams() 

    const appart = data.find((loge) => loge.id === id )
    //const tag = appart.tags.map((tag) => tag)
       
    return (
        
    <div className="kasa-affichage" > 
            < Carrousel />
      {/*} <div className="kasa-logement-caroussel" key={appart.id}>
            <div className="kasa-arrow">
                <img className="kasa-arrow-left" src={Arrowl}></img>
                <img className="kasa-arrow-right" src={Arrowr}></img>
                <img className="kasa-log" src={appart.cover} alt={appart.title}></img>
            </div>
        </div> */}
        <div className="kasa-log-title">
            <div className="kasa-log-presentation">
                <h3 className="kasa-log-h">{appart.title}</h3>
                    <a className="kasa-log-a">{appart.location}</a>
                
                    <div className="Kasa-tag-presentation">
                    {appart.tags.map((tag) => {
                   return  <div className="kasa-tag"><a className="kasa-tag-text">{tag}</a></div>
                    })}
                    </div>
                
            </div>
            <div className="kasa-log-present">
                <div className="kasa-log-user">
                    <div className="kasa-user">
                        <a className="kasa-user-name">{appart.host.name}</a>
                    </div>
                    <img className="kasa-img-user" src={appart.host.picture}></img>    
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