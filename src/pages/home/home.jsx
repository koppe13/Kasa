import Card from "../../components/module/Card/Card";
import Banner from "../../components/module/Banner/Banner";
import Imghome from "../../asset/images/banniere-home.png";

function Home() {
  return (
    <div className="kasa-main">
      <Banner img={Imghome} texte="Chez vous, partout et ailleurs" />
      <div className="kasa-main-grid">
        <Card />
      </div>
    </div>
  );
}

export default Home;
