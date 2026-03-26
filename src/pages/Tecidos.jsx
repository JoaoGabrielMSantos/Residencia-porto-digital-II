import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Tecidos = () => {

  return (
    <>
      <Header title="Tecidos" subtitle="Gerencie o catálogo de tecidos">
        <Link to="/cadastro-tecidos" className="btn-add" style={{ textDecoration: 'none', display: 'inline-block' }}>+ Adicionar</Link>
      </Header>

      <section className="pedidos-container">
        <div className="search-bar" style={{ position: 'relative', marginBottom: '24px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#555' }}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" placeholder="Buscar Tecidos" />
        </div>

        <div className="inventory-grid">
          {/* CARD 1 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Malha 100% algodão</h3>
                <span className="codigo">TEC-001</span>
              </div>
              <Link to="/cadastro-tecidos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info">
                <p><strong>Composição:</strong> <span>100% algodão</span></p>
                <p><strong>Gramatura:</strong> <span>180 g/m²</span></p>
                <p><strong>Estoque:</strong> <span>500 metros</span></p>
                <p><strong>Fabricante:</strong> <span>Loja</span></p>
              </div>
              <div className="attributes">
                <p>Cores disponíveis</p>
                <div className="tags-list">
                  <span>Branco</span>
                  <span>Preto</span>
                  <span>Azul Marinho</span>
                  <span>Cinza Mescla</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Viscose Estampada</h3>
                <span className="codigo">TEC-003</span>
              </div>
              <Link to="/cadastro-tecidos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info">
                <p><strong>Composição:</strong> <span>100% Viscose</span></p>
                <p><strong>Gramatura:</strong> <span>120 g/m²</span></p>
                <p><strong>Estoque:</strong> <span>320 metros</span></p>
                <p><strong>Fabricante:</strong> <span>Loja</span></p>
              </div>
              <div className="attributes">
                <p>Cores disponíveis</p>
                <div className="tags-list">
                  <span>Branco</span>
                  <span>Preto</span>
                  <span>Floral Azul</span>
                  <span>Floral Rosa</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* CARD 3 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Sarja Premium</h3>
                <span className="codigo">TEC-004</span>
              </div>
              <Link to="/cadastro-tecidos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info">
                <p><strong>Composição:</strong> <span>100% algodão</span></p>
                <p><strong>Gramatura:</strong> <span>280 g/m²</span></p>
                <p><strong>Estoque:</strong> <span>450 metros</span></p>
                <p><strong>Fabricante:</strong> <span>Loja</span></p>
              </div>
              <div className="attributes">
                <p>Cores disponíveis</p>
                <div className="tags-list">
                  <span>Branco</span>
                  <span>Preto</span>
                  <span>Azul Marinho</span>
                  <span>Cinza Mescla</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tecidos;
