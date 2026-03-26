import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Modelagem = () => {

  return (
    <>
      <Header title="Modelagens" subtitle="Gerencie as modelagens dos produtos">
        <Link to="/cadastro-modelagem" className="btn-add" style={{ textDecoration: 'none', display: 'inline-block' }}>+ Adicionar</Link>
      </Header>

      <section className="pedidos-container">
        <div className="search-bar" style={{ position: 'relative', marginBottom: '24px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#555' }}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" placeholder="Buscar Modelagens" />
        </div>

        <div className="inventory-grid">
          {/* CARD 1 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Camiseta Básica Masculina</h3>
                <span className="codigo">MOD-001</span>
              </div>
              <Link to="/cadastro-modelagem" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="attributes" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
                <p>Tamanhos disponíveis</p>
                <div className="tags-list">
                  <span>P</span>
                  <span>M</span>
                  <span>G</span>
                  <span>GG</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Calça Jeans Skinny Feminina</h3>
                <span className="codigo">MOD-002</span>
              </div>
              <Link to="/cadastro-modelagem" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="attributes" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
                <p>Tamanhos disponíveis</p>
                <div className="tags-list">
                  <span>36</span>
                  <span>38</span>
                  <span>40</span>
                  <span>42</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="inventory-card">
            <div className="card-header">
              <div>
                <h3>Vestido Midi</h3>
                <span className="codigo">MOD-003</span>
              </div>
              <Link to="/cadastro-modelagem" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
            </div>
            <div className="card-body">
              <div className="attributes" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
                <p>Tamanhos disponíveis</p>
                <div className="tags-list">
                  <span>P</span>
                  <span>M</span>
                  <span>G</span>
                  <span>GG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Modelagem;
