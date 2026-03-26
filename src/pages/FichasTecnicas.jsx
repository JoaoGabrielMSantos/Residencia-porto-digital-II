import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const FichasTecnicas = () => {
  const { fichasTecnicas, produtos } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFichas = fichasTecnicas.filter(f => {
    const produto = produtos.find(p => p.id === f.produtoId);
    if (!produto) return false;
    return produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) || f.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Header title="Fichas Técnicas" subtitle="Gerencie os custos de produção dos produtos">
        <Link to="/cadastro-ficha-tecnica" className="btn-add" style={{ textDecoration: 'none', display: 'inline-block' }}>+ Adicionar Ficha</Link>
      </Header>

      <section className="pedidos-container">
        <div className="search-bar" style={{ position: 'relative', marginBottom: '24px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#555' }}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input 
            type="text" 
            placeholder="Buscar Ficha Técnica" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredFichas.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>
            Não há fichas técnicas cadastradas.
          </div>
        ) : (
          <div className="inventory-grid">
            {filteredFichas.map(ficha => {
              const produto = produtos.find(p => p.id === ficha.produtoId);
              return (
                <div className="inventory-card" key={ficha.id}>
                  <div className="card-header">
                    <div>
                      <h3>{produto?.nome || 'Produto Desconhecido'}</h3>
                      <span className="codigo">{ficha.id}</span>
                    </div>
                    <Link to="#" className="menu-btn" style={{ textDecoration: 'none' }} title="Detalhes">⋯</Link>
                  </div>
                  <div className="card-body">
                    <div className="info">
                      <p><strong>Custo Total de Produção:</strong> <span style={{ color: '#4CAF50', fontWeight: 'bold' }}>R$ {ficha.custoTotal.toFixed(2)}</span></p>
                      <p><strong>Tecidos Cadastrados:</strong> <span>{ficha.itensTecido.length}</span></p>
                      <p><strong>Aviamentos Cadastrados:</strong> <span>{ficha.itensAviamento.length}</span></p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
};

export default FichasTecnicas;
