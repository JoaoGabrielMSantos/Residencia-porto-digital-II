import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

import Dashboard from './pages/Dashboard';
import Pedidos from './pages/Pedidos';
import Tecidos from './pages/Tecidos';
import Aviamentos from './pages/Aviamentos';
import Modelagem from './pages/Modelagem';
import Beneficiamentos from './pages/Beneficiamentos';
import Configuracoes from './pages/Configuracoes';
import CadastroTecidos from './pages/CadastroTecidos';
import CadastroAviamentos from './pages/CadastroAviamentos';
import CadastroModelagem from './pages/CadastroModelagem';
import CadastroBeneficiamentos from './pages/CadastroBeneficiamentos';

import Produtos from './pages/Produtos';
import CadastroProduto from './pages/CadastroProduto';

import FichasTecnicas from './pages/FichasTecnicas';
import CadastroFichaTecnica from './pages/CadastroFichaTecnica';

import Custos from './pages/Custos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pedidos" element={<Pedidos />} />
          <Route path="tecidos" element={<Tecidos />} />
          <Route path="aviamentos" element={<Aviamentos />} />
          <Route path="modelagem" element={<Modelagem />} />
          <Route path="beneficiamentos" element={<Beneficiamentos />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="cadastro-tecidos" element={<CadastroTecidos />} />
          <Route path="cadastro-aviamentos" element={<CadastroAviamentos />} />
          <Route path="cadastro-modelagem" element={<CadastroModelagem />} />
          <Route path="cadastro-beneficiamentos" element={<CadastroBeneficiamentos />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="cadastro-produto" element={<CadastroProduto />} />
          <Route path="fichas-tecnicas" element={<FichasTecnicas />} />
          <Route path="cadastro-ficha-tecnica" element={<CadastroFichaTecnica />} />
          <Route path="custos" element={<Custos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
