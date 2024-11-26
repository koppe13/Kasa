import kasaLogo2 from "../asset/images/LOGO NB.svg";

function Footer () {

return (
    <div className="kasa-footer-banner">
      <div className="kasa-footer-titre">
      <img src={kasaLogo2} alt="logo Kasa noir et blanc"></img>
      </div>
      <a className="kasa-footer-text">© 2020 Kasa. All rights reserved</a>
    </div>
    
  );
}

export default Footer