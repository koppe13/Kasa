import { useState } from "react";
import Appart from "./asset/location.json";

function Listappart () {

   
        
            <div>
            
                {Appart.map((item) => (
                    <card
                        key={item.id}
                        title={item.title}
                        cover={item.cover}                        
                    />    
                ))}
            
            </div>


}
export default Listappart