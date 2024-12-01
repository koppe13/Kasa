import Appart from "./asset/location.json";

function Listappart () {

                {Appart.map((item) => (
                    <article
                        key={item.id}
                        title={item.title}
                        cover={item.cover}                        
                    />    
                ))}
            
           


}
export default Listappart