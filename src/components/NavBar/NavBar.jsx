import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path ? 'active-item' : '';

  return (
    <Menu 
      isOpen={menuOpen}
      onStateChange={handleStateChange}
    >
      <Link to='/' onClick={closeMenu} className={`menu-item ${isActive('/')}`}>
        Início
      </Link>
      <Link to='/about' onClick={closeMenu} className={`menu-item ${isActive('/about')}`}>
        Sobre mim
      </Link>
      <Link to='/projects' onClick={closeMenu} className={`menu-item ${isActive('/projects')}`}>
        Projetos
      </Link>
      <Link to='/skills' onClick={closeMenu} className={`menu-item ${isActive('/skills')}`}>
        Skills
      </Link>
      <Link to='/contact' onClick={closeMenu} className={`menu-item ${isActive('/contact')}`}>
        Contato
      </Link>
    </Menu>
  );
}

export default NavBar;
