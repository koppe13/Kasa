
import Valderoulant from "./valderoulant.jsx"
import { useParams } from 'react-router-dom'
import data from "../location.json"
import Carrousel from "../components/carrousel.jsx"
import Rating from "../components/rating.jsx"
import error404 from "../pages/error404.jsx"

function Logement () {
    const { id } = useParams() 
    const appart = data.find((loge) => loge.id === id)


   if(appart != null) {
    return (
        
    <div className="kasa-affichage" > 
            < Carrousel namealt={appart.title}/>
            
            <div className="kasa-log-title">
                <div className="kasa-log-presentation">
                        <h3 className="kasa-log-h">{appart.title}</h3>
                        <a className="kasa-log-a">{appart.location}</a>
                        <div className="Kasa-tag-presentation">
                        {appart.tags.map((tag) => {
                        return  <div key={'${tag}-${id}'} className="kasa-tag"><a className="kasa-tag-text">{tag}</a></div>
                        })}
                        </div>
                </div>
                <div className="kasa-log-present">
                <div className="kasa-log-user">
                    <div className="kasa-user">
                        <a className="kasa-user-name">{appart.host.name}</a>
                    </div>
                    <img className="kasa-img-user" src={appart.host.picture} alt={appart.host.name}></img>    
                </div>

                    <div className="kasa-star-ligne">
                        <Rating classement={appart.rating}/>
                    </div>
                
            </div>
           
        </div>
        <div className="kasa-log-valeurs">
            <Valderoulant nameVariable="Description" Variable={appart.description} />
            
            <Valderoulant nameVariable="Equipements" Variable={appart.equipments.map((Variable) => {return <li>{Variable}</li>} )}/>
           
            
        </div>
    
    </div>
    )
} else {
    return (<error404.jsx />)
}
};

    







export default Logement