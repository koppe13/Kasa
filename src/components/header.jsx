import kasaLogo from "../asset/images/LOGO.svg";
//import Navbar from "./navbar";
function Header () {
    
return (
    <div className="kasa-nav">
      <div className="kasa-nav-titre">
        <img src={kasaLogo} alt="logo Kasa"></img>         
      </div>
        <nav className="kasa-nav-lien">
          
            <a href="#accueil" className="nav">Acceuil</a>
            <a href="#apropos" className="nav">A propos</a> 
             
        </nav>
    </div>
  );
}

export default Header