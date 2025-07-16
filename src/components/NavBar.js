import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ backgroundColor: '#eee', padding: '10px' }}>
      <Link to="/uf">UF</Link> |{" "}
      <Link to="/ivp">IVP</Link> |{" "}
      <Link to="/ipc">IPC</Link> |{" "}
      <Link to="/utm">UTM</Link> |{" "}
      <Link to="/dolar">Dólar</Link> |{" "}
      <Link to="/euro">Euro</Link>
    </nav>
  );
}

export default NavBar;
