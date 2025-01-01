import Card from "../components/card";
import Banner from "../components/banner";
import Imghome from '../asset/images/Image1.png';

function Home () {
   
        return (
                    

                    <div className="kasa-main">
                        <Banner img={Imghome} texte="Chez vous, partout et ailleurs"/>
                        <div className="kasa-main-grid">
                        < Card />
                        </div>  
                    </div>
                
        );
    
    
    
    }



   export default Home