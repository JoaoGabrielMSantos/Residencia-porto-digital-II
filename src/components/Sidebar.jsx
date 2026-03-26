import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-s">
        <img src="/img/logo.jpeg" alt="Logo FBIK" />
      </div>

      <nav className="menu">
        <h2>Menu principal</h2>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-grid"></i>
          Dashboard
        </NavLink>
        <NavLink to="/pedidos" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-cart3"></i>
          Pedidos
        </NavLink>

        <h2>Cadastro</h2>
        <NavLink to="/tecidos" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-scissors"></i>
          Tecidos
        </NavLink>
        <NavLink to="/aviamentos" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-box-seam"></i>
          Aviamentos
        </NavLink>
        <NavLink to="/modelagem" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-grid-3x3-gap"></i>
          Modelagem
        </NavLink>
        <NavLink to="/beneficiamentos" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-brush"></i>
          Beneficiamentos
        </NavLink>

        <h2>Engenharia</h2>
        <NavLink to="/produtos" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-bag"></i>
          Produtos
        </NavLink>
        <NavLink to="/fichas-tecnicas" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-file-earmark-text"></i>
          Ficha Técnica
        </NavLink>

        <h2>Finanças</h2>
        <NavLink to="/custos" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-currency-dollar"></i>
          Custos
        </NavLink>

        <NavLink to="/configuracoes" className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}>
          <i className="bi bi-gear"></i>
          Configurações
        </NavLink>

        <button className="btn-sair">Sair</button>
      </nav>
    </aside>
  );
};

export default Sidebar;
