import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Produtos = () => {
  const { produtos } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProdutos = produtos.filter(p => 
    p.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header title="Produtos" subtitle="Gerencie o catálogo de produtos finais">
        <Link to="/cadastro-produto" className="btn-add" style={{ textDecoration: 'none', display: 'inline-block' }}>+ Adicionar</Link>
      </Header>

      <section className="pedidos-container">
        <div className="search-bar" style={{ position: 'relative', marginBottom: '24px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '15px', transform: 'translateY(-50%)', color: '#555' }}>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
          <input 
            type="text" 
            placeholder="Buscar Produtos" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredProdutos.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#aaa' }}>
            Não há produtos cadastrados.
          </div>
        ) : (
          <div className="inventory-grid">
            {filteredProdutos.map(produto => (
              <div className="inventory-card" key={produto.id}>
                <div className="card-header">
                  <div>
                    <h3>{produto.nome}</h3>
                    <span className="codigo">{produto.id}</span>
                  </div>
                  <Link to="/cadastro-produto" className="menu-btn" style={{ textDecoration: 'none' }} title="Editar item">⋯</Link>
                </div>
                <div className="card-body">
                  <div className="info">
                    <p><strong>Tamanho:</strong> <span>{produto.tamanho}</span></p>
                    <p><strong>Quantidade em Estoque:</strong> <span>{produto.quantidade}</span></p>
                    {produto.custoTotal && (
                      <p><strong>Custo Calculado:</strong> <span style={{ color: '#4CAF50' }}>R$ {parseFloat(produto.custoTotal).toFixed(2)}</span></p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Produtos;
