import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';

const CadastroProduto = () => {
  const navigate = useNavigate();
  const { produtos, setProdutos } = useContext(AppContext);

  const [formData, setFormData] = useState({
    nome: '',
    quantidade: '',
    tamanho: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    if (!formData.nome || !formData.quantidade || !formData.tamanho) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const novoId = `PROD-${String(produtos.length + 1).padStart(3, '0')}`;
    const novoProduto = {
      id: novoId,
      ...formData,
      quantidade: Number(formData.quantidade),
      custoTotal: null // Será calculado na Ficha Técnica futuramente
    };

    setProdutos([...produtos, novoProduto]);
    alert("Produto cadastrado com sucesso!");
    navigate('/produtos');
  };

  const handleCancel = () => {
    navigate('/produtos');
  };

  return (
    <>
      <Header title="Cadastro de Produto" subtitle="Adicione um novo produto final ao catálogo" />
      
      <section className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <div className="form-group" style={{ flex: '1 1 100%' }}>
              <label>Nome do Produto *</label>
              <input 
                type="text" 
                name="nome" 
                placeholder="Ex. Camiseta Básica" 
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Quantidade *</label>
              <input 
                type="number" 
                name="quantidade" 
                placeholder="Ex. 10" 
                value={formData.quantidade}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Tamanho *</label>
              <select name="tamanho" value={formData.tamanho} onChange={handleChange}>
                <option value="">Selecione</option>
                <option value="PP">PP</option>
                <option value="P">P</option>
                <option value="M">M</option>
                <option value="G">G</option>
                <option value="GG">GG</option>
                <option value="XG">XG</option>
                <option value="Único">Único</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-cancelar" onClick={handleCancel}>Cancelar</button>
            <button type="button" className="btn-salvar" onClick={handleSave}>Salvar Produto</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CadastroProduto;
