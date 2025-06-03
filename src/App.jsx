import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Despesas from './components/Despesas';
import Vencimentos from './components/Vencimentos';
import ListaDespesas from './components/ListaDespesas';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Só mostra Menu na página inicial */}
      {location.pathname === "/" ? <Menu /> : null}

      <Routes>
        <Route path="/despesas" element={<Despesas />} />
        <Route path="/vencimentos" element={<Vencimentos />} />
        <Route path="/lista-despesas" element={<ListaDespesas />} />
      </Routes>
    </>
  );
}

export default App
