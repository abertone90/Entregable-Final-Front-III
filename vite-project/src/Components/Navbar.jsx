// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    if (state.theme === 'light') {
      dispatch({ type: 'DARK-THEME' });
    } else {
      dispatch({ type: 'LIGHT-THEME' });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contact">Contactenos</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
      </ul>
      <button onClick={toggleTheme} className='boton-nav'>
        Cambiar Tema
      </button>
    </nav>
  );
};

export default Navbar;
