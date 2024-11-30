import data from "../asset/location.json";

function Vignette () {
   
    return (
        
            
                <div className="kasa-vignette">
                  {data.map((location) => (

                    <a href="#">
                          <article className="kasa-card" key={location.id}>
                            <img className="kasa-image" src={location.cover} alt={location.title}></img>
                          <div className="kasa-card-content">
                            <h2 className="kasa-card-text" >{location.title}</h2> 
                          </div>
                        </article>
                    </a>
                    
                    ))}
                    
                </div>
                
            
        
    );



}

export default Vignette