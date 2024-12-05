import { useState } from "react"
import chevron from "../asset/images/arrow.png"



function Valderoulant () {

  const turn = () => {
    console.log("turn");
  }   


  
    return (        
        
        <div className="kasa-valderoulant">
                <a>Fiabilité</a>
                <button className="button" ><img onClick={turn} src={chevron}></img></button>
        </div>

    )
}


export default Valderoulant