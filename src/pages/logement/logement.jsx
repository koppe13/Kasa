import Collapse from "../../components/module/Collapse/Collapse.jsx";
import { useParams } from "react-router-dom";
import data from "../../data/location.json";
import Gallery from "../../components/module/Gallery/Gallery.jsx";
import Rating from "../../components/module/Rating/Rating.jsx";
import Error404 from "../error404/error404.jsx";

function Logement() {
  const { id } = useParams();
  const appart = data.find((loge) => loge.id === id);

  if (appart !== undefined) {
    return (
      <div className="kasa-affichage">
        <Gallery namealt={appart.title} />

        <div className="kasa-log-title">
          <div className="kasa-log-presentation">
            <h3 className="kasa-log-h">{appart.title}</h3>
            <p className="kasa-log-a">{appart.location}</p>
            <div className="Kasa-tag-presentation">
              {appart.tags.map((tag, index) => {
                return (
                  <div key={index} className="kasa-tag">
                    <p className="kasa-tag-text">{tag}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="kasa-log-present">
            <div className="kasa-log-user">
              <div className="kasa-user">
                <p className="kasa-user-name">{appart.host.name}</p>
              </div>
              <img
                className="kasa-img-user"
                src={appart.host.picture}
                alt={appart.host.name}
              ></img>
            </div>

            <div className="kasa-star-ligne">
              <Rating classement={appart.rating} />
            </div>
          </div>
        </div>
        <div className="kasa-log-valeurs">
          <Collapse nameVariable="Description" Variable={appart.description} />

          <Collapse
            nameVariable="Equipements"
            Variable={appart.equipments.map((Variable, index) => {
              return <p key={index}>{Variable}</p>;
            })}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Error404 />
      </div>
    );
  }
}

export default Logement;
