import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Beneficiamentos = () => {

  return (
    <>
      <Header title="Beneficiamentos" subtitle="Gerencie os processos de beneficiamento">
        <Link to="/cadastro-beneficiamentos" className="btn-add" style={{ textDecoration: 'none', display: 'inline-block' }}>+ Adicionar</Link>
      </Header>

      <section className="pedidos-container">
        <div className="search-bar" style={{ position: 'relative', marginBottom: '24px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#555' }}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" placeholder="Buscar Beneficiamentos" />
        </div>

        <div className="inventory-grid">
          {/* CARD 1 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Estamparia Digital</h3>
                <span className="codigo" style={{ backgroundColor: 'var(--success)' }}>Disponível</span>
              </div>
              <Link to="/cadastro-beneficiamentos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info">
                <p><strong>Código:</strong> <span>BEN-001</span></p>
              </div>
              <div className="attributes">
                <p style={{ textTransform: 'none', fontWeight: 'normal', color: 'var(--text-secondary)', marginTop: '8px' }}>
                  Impressão digital em alta resolução para tecidos limitados ou personalizados.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Bordado Computadorizado</h3>
                <span className="codigo" style={{ backgroundColor: 'var(--success)' }}>Disponível</span>
              </div>
              <Link to="/cadastro-beneficiamentos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info">
                <p><strong>Código:</strong> <span>BEN-002</span></p>
              </div>
              <div className="attributes">
                <p style={{ textTransform: 'none', fontWeight: 'normal', color: 'var(--text-secondary)', marginTop: '8px' }}>
                  Bordados de logotipos e estampas vetoriais em múltiplos núcleos e fios premium.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Lavagem e Tingimento</h3>
                <span className="codigo" style={{ backgroundColor: 'var(--warning)' }}>Manutenção</span>
              </div>
              <Link to="/cadastro-beneficiamentos" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="info">
                <p><strong>Código:</strong> <span>BEN-003</span></p>
              </div>
              <div className="attributes">
                <p style={{ textTransform: 'none', fontWeight: 'normal', color: 'var(--text-secondary)', marginTop: '8px' }}>
                  Processo químico de desbote, coloração e maciez de peças de algodão ou malha.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beneficiamentos;
