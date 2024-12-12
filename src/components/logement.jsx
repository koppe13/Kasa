import { Component } from 'react'
import Valderoulant from "./valderoulant"
import Arrowl from "../asset/images/arrow_back.png"
import Arrowr from "../asset/images/arrow_forward.png"
 
class Logement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logementData: {},
        }
    }
    componentDidMount() {
        const { id } = this.props
     
        fetch(`http://localhost:3000/location?id=${id}`)
        .then((response) => response.json())
        .then((jsonResponse) => {
            this.setState({ logementData: jsonResponse?.locationData })
        })
    }
    render() {
        const { logementData } = this.state
        const {
            cover,
            pictures,
            title,
            location,
            equipments,
            tags,
            rating,
            description,
            id,
            host,
        } = logementData

        return (
        
            <div className="kasa-affichage" > 
                <div className="kasa-logement-caroussel" key={id}>
                    <img className="kasa-log" key={title} src={cover} alt={title}></img>
                    <div className="kasa-arrow">
                        <img className="kasa-arrow-left" src={Arrowl}></img>
                        <img className="kasa-arrow-right" src={Arrowr}></img>
                    </div>
                </div>
                <div className="kasa-log-title">
                    <div className="kasa-log-presentation">
                        <div className="kasa-log-item">
                            <h3 className="kasa-log-h">{title}</h3>
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
                            <img className="kasa-img-user" src={host}></img>    
                        </div>
                        <div className="kasa-star">
                            <div className="kasa-star-ligne">
                                <img src={rating}></img>
                                <img src={rating}></img>
                                <img src={rating}></img>
                                <img src={rating}></img>
                                <img src={rating}></img>
                            </div>
                        </div>
                    </div>
                   
                </div>
                    <div ID="kasa-val2">
                    <div className="kasa-log-valeurs">
                    <Valderoulant />
                    <Valderoulant />
                    </div>
                    </div>
            
            </div>
            )};



    
};
 
export default Logement