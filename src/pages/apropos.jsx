import Collapse from "../components/collapse"
import aboutList from "../aboutlist.json";
import Banner from "../components/banner"
import Imgpropos from "../asset/images/kalen1.png"


function Apropos () {
    
    return (
        <div className="kasa-propos">
            
            < Banner img={Imgpropos}/>
            <div className="kasa-propos-valeurs">
            {aboutList.map((variable, index) => {
             return <div key={index}>  <Collapse nameVariable={variable.title} Variable={variable.content} /> </div>
            })}
            </div>
        </div>
      );





}

export default Apropos