import Collapse from "../../components/module/Collapse/Collapse";
import aboutList from "../../data/aboutlist.json";
import Banner from "../../components/module/Banner/Banner";
import Imgpropos from "../../asset/images/banniere-apropos.png";

function Apropos() {
  return (
    <div className="kasa-propos">
      <Banner img={Imgpropos} />
      <div className="kasa-propos-valeurs">
        {aboutList.map((variable, index) => {
          return (
            <div key={index}>
              {" "}
              <Collapse
                nameVariable={variable.title}
                Variable={variable.content}
              />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Apropos;
