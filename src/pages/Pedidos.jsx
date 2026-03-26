import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Pedidos = () => {
  return (
    <>
      <Header title="Pedidos" subtitle="Gerencie todos os pedidos da produção">
        <button className="btn-add" style={{ backgroundColor: '#ff6b00', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>+ Adicionar</button>
      </Header>
      
      <section className="pedidos-container">
        <div className="search-bar" style={{ position: 'relative', marginBottom: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#555' }}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input type="text" placeholder="Buscar Pedidos" style={{ paddingLeft: '40px', width: '100%', padding: '10px 10px 10px 40px', borderRadius: '5px', border: '1px solid #ddd' }} />
        </div>

        {/* URGENTE */}
        <div className="pedido-section">
          <h2 className="section-title urgente-title">Urgente</h2>
          <Link to="/pedido-detalhado" className="pedido-card urgente">
            <div className="pedido-info">
              <div>
                <h3>Pedido 12345</h3>
                <p>Loja Fashion Center</p>
                <span>500 unidades</span>
              </div>
              <div className="pedido-data">
                <span>26/10/2025</span>
                <p>Processo: 75%</p>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
          </Link>
        </div>

        {/* EM ANDAMENTO */}
        <div className="pedido-section">
          <h2 className="section-title andamento-title">Em andamento</h2>
          <Link to="/pedido-detalhado" className="pedido-card andamento">
            <div className="pedido-info">
              <div>
                <h3>Pedido 12346</h3>
                <p>Loja Elegante</p>
                <span>300 unidades</span>
              </div>
              <div className="pedido-data">
                <span>20/10/2025</span>
                <p>Processo: 56%</p>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '56%' }}></div>
            </div>
          </Link>

          <Link to="/pedido-detalhado" className="pedido-card andamento">
            <div className="pedido-info">
              <div>
                <h3>Pedido 12347</h3>
                <p>Loja Moderna</p>
                <span>200 unidades</span>
              </div>
              <div className="pedido-data">
                <span>19/10/2025</span>
                <p>Processo: 56%</p>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '56%' }}></div>
            </div>
          </Link>
        </div>

        {/* CONCLUÍDO */}
        <div className="pedido-section">
          <h2 className="section-title concluido-title">Concluído</h2>
          <Link to="/pedido-detalhado" className="pedido-card concluido">
            <div className="pedido-info">
              <div>
                <h3>Pedido 12348</h3>
                <p>Loja Premium</p>
                <span>800 unidades</span>
              </div>
              <div className="pedido-data">
                <span>15/10/2025</span>
                <p>Processo: 100%</p>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '100%' }}></div>
            </div>
          </Link>
        </div>

        {/* PAGINAÇÃO */}
        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>&gt;</button>
        </div>
      </section>
    </>
  );
};

export default Pedidos;
