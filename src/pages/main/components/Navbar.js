import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/main">Main</Link>
      <Link to="/table">Table</Link>
      <Link to="/pokemon-list">Pokémon List</Link> {}
    </nav>
  );
};

export default Navbar;
