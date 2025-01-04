import kasaLogo2 from "../../asset/images/LOGO_NB.png";

function Footer() {
  return (
    <div className="kasa-footer-banner">
      <div className="kasa-footer-titre">
        <img src={kasaLogo2} alt="logo Kasa noir et blanc"></img>
      </div>
      <p className="kasa-footer-text">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
