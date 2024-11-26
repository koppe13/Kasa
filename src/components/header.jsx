import kasaLogo from "../asset/images/LOGO.svg";

function Header () {
    
return (
    <div className="kasa-nav">
      <div className="kasa-nav-titre">
        <img src={kasaLogo} alt="logo Kasa"></img>         
      </div>
        <nav className="kasa-nav-lien">
          
            <a href="#accueil" className="nav">Accueil</a>
            <a href="#apropos" className="nav">A Propos</a> 
             
        </nav>
    </div>
  );
}

export default Header