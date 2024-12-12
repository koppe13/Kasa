import { NavLink } from 'react-router-dom';
import Mainhome from './mainhome';
import Apropos from './mainpropos';

function Navbar() {
  return (
    <nav>
      <NavLink to="/#accueil">{Mainhome}</NavLink>
      <NavLink to="/#apropos">{Apropos}</NavLink>
    </nav>
  );
}

