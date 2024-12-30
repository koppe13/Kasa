import Valderoulant from "../components/valderoulant"
import aboutList from "../aboutlist.json";



function Apropos () {
    
    return (
        <div className="kasa-propos">
            
            <div className="kasa-propos-banner"></div>
            <div className="kasa-propos-valeurs">
            {aboutList.map((variable) => {
             return <Valderoulant nameVariable={variable.title} Variable={variable.content}/>
            })}
            </div>
        </div>
      );





}

export default Apropos