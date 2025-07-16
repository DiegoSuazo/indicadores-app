import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import UF from './components/UF';
import IVP from './components/IVP';
import IPC from './components/IPC';
import UTM from './components/UTM';
import Dolar from './components/Dolar';
import Euro from './components/Euro';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/uf" element={<UF />} />
          <Route path="/ivp" element={<IVP />} />
          <Route path="/ipc" element={<IPC />} />
          <Route path="/utm" element={<UTM />} />
          <Route path="/dolar" element={<Dolar />} />
          <Route path="/euro" element={<Euro />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
