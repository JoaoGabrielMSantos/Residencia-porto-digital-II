import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Aviamentos = () => {

  return (
    <>
      <Header title="Aviamentos" subtitle="Gerencie o estoque de aviamentos">
        <Link to="/cadastro-aviamentos" className="btn-add" style={{ textDecoration: 'none', display: 'inline-block' }}>+ Adicionar</Link>
      </Header>

      <section className="pedidos-container">
        <div className="search-bar" style={{ position: 'relative', marginBottom: '24px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#555' }}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" placeholder="Buscar Aviamentos" />
        </div>

        <div className="inventory-grid">
          {/* CARD 1 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Botão Plástico 4 furos</h3>
                <span className="codigo">AVI-001</span>
              </div>
              <Link to="/cadastro-aviamentos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info" style={{ marginBottom: '16px' }}>
                <p><strong>Estoque Total:</strong> <span>5000 unidades</span></p>
              </div>
              <div className="attributes">
                <p>Tamanhos</p>
                <div className="tags-list">
                  <span>12mm</span>
                  <span>14mm</span>
                  <span>16mm</span>
                </div>
                <p style={{ marginTop: '12px' }}>Cores disponíveis</p>
                <div className="tags-list">
                  <span>Branco</span>
                  <span>Preto</span>
                  <span>Transparente</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Zíper Nylon</h3>
                <span className="codigo">AVI-002</span>
              </div>
              <Link to="/cadastro-aviamentos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info" style={{ marginBottom: '16px' }}>
                <p><strong>Estoque Total:</strong> <span>1200 unidades</span></p>
              </div>
              <div className="attributes">
                <p>Tamanhos</p>
                <div className="tags-list">
                  <span>15mm</span>
                  <span>20mm</span>
                  <span>50mm</span>
                  <span>60mm</span>
                </div>
                <p style={{ marginTop: '12px' }}>Cores disponíveis</p>
                <div className="tags-list">
                  <span>Branco</span>
                  <span>Preto</span>
                  <span>Azul Marinho</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Linha de Costura</h3>
                <span className="codigo">AVI-004</span>
              </div>
              <Link to="/cadastro-aviamentos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info" style={{ marginBottom: '16px' }}>
                <p><strong>Estoque Total:</strong> <span>350 cones</span></p>
              </div>
              <div className="attributes">
                <p>Tamanhos</p>
                <div className="tags-list">
                  <span>Cone 5000m</span>
                </div>
                <p style={{ marginTop: '12px' }}>Cores disponíveis</p>
                <div className="tags-list">
                  <span>Branco</span>
                  <span>Preto</span>
                  <span>Azul</span>
                  <span>Cinza</span>
                  <span>Bege</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aviamentos;
