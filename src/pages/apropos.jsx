import Collapse from "../components/collapse"
import aboutList from "../aboutlist.json";




function Apropos () {
    
    return (
        <div className="kasa-propos">
            
            <div className="kasa-propos-banner"></div>
            <div className="kasa-propos-valeurs">
            {aboutList.map((variable, index) => {
             return <Collapse nameVariable={variable.title} Variable={variable.content} id={index}/>
            })}
            </div>
        </div>
      );





}

export default Apropos