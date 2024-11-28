import Vignette from "./vignette.jsx";
import data from "../asset/location.json";

function Main () {
   


    function Main () {
   
        return (
            <div className="kasa-main">
                    {data.map((location) => (
                        < Vignette title={location} />
                    ))}
            </div>
        );
    
    
    
    }



    return (

        <div className="kasa-main">
            <div className="kasa-main-grid">
            < Vignette />
            < Vignette />
            < Vignette />
            
            
               
                   
            </div>
        </div>
    );



}

export default Main