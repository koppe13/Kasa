import { useState } from "react"

import data from "../asset/location.json";


function Appart () {

 return (
        <div>
            
            {data.map((image) => (
                <img>{image.cover} </img>
            ))}
            
            

       </div>



)





}

export default Appart