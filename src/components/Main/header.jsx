import { Link } from 'react-router-dom'
import kasaLogo from "../../asset/images/LOGO.svg";


function Header () {
    
return (
    <div className="kasa-nav">
      <div className="kasa-nav-titre">
        <img src={kasaLogo} alt="logo Kasa"></img>         
      </div>
        <nav className="kasa-nav-lien">
          
            <Link to='/' className="nav">Acceuil</Link>
            <Link to='/mainpropos' className="nav">A propos</Link> 
             
        </nav>
    </div>
  );
}

export default Header