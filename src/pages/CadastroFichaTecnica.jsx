import React, { useState, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';

const CadastroFichaTecnica = () => {
  const navigate = useNavigate();
  const { 
    tecidos, aviamentos, modelagens, beneficiamentos, produtos, setProdutos,
    fichasTecnicas, setFichasTecnicas 
  } = useContext(AppContext);

  const [produtoId, setProdutoId] = useState('');
  
  const [itensTecido, setItensTecido] = useState([{ tecidoId: '', quantidade: '' }]);
  const [itensAviamento, setItensAviamento] = useState([{ aviamentoId: '', quantidade: '' }]);
  
  const [modelagemId, setModelagemId] = useState('');
  const [beneficiamentoId, setBeneficiamentoId] = useState('');

  // Cálculo de Custos
  const custoTecido = useMemo(() => {
    return itensTecido.reduce((total, item) => {
      const tb = tecidos.find(t => t.id === item.tecidoId);
      if (tb && item.quantidade) {
        return total + (tb.preco * Number(item.quantidade));
      }
      return total;
    }, 0);
  }, [itensTecido, tecidos]);

  const custoAviamento = useMemo(() => {
    return itensAviamento.reduce((total, item) => {
      const tb = aviamentos.find(a => a.id === item.aviamentoId);
      if (tb && item.quantidade) {
        return total + (tb.preco * Number(item.quantidade));
      }
      return total;
    }, 0);
  }, [itensAviamento, aviamentos]);

  const custoBeneficiamento = useMemo(() => {
    const ben = beneficiamentos.find(b => b.id === beneficiamentoId);
    return ben ? ben.preco : 0;
  }, [beneficiamentoId, beneficiamentos]);

  const custoTotal = custoTecido + custoAviamento + custoBeneficiamento;

  const handleSave = () => {
    if (!produtoId) {
      alert("Selecione um produto final!");
      return;
    }

    const novoId = `FT-${String(fichasTecnicas.length + 1).padStart(3, '0')}`;
    const novaFicha = {
      id: novoId,
      produtoId,
      itensTecido,
      itensAviamento,
      modelagemId,
      beneficiamentoId,
      custoTotal
    };

    setFichasTecnicas([...fichasTecnicas, novaFicha]);

    // Atualiza o custo total no produto
    const atualizaProdutos = produtos.map(p => {
      if (p.id === produtoId) {
        return { ...p, custoTotal };
      }
      return p;
    });
    setProdutos(atualizaProdutos);

    alert("Ficha técnica salva com sucesso!");
    navigate('/fichas-tecnicas');
  };

  const updateItemTecido = (index, field, value) => {
    const list = [...itensTecido];
    list[index][field] = value;
    setItensTecido(list);
  };

  const updateItemAviamento = (index, field, value) => {
    const list = [...itensAviamento];
    list[index][field] = value;
    setItensAviamento(list);
  };

  return (
    <>
      <Header title="Nova Ficha Técnica" subtitle="Engenharia de custos do produto" />
      
      <section className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3 style={{ marginBottom: '16px', color: '#fff', fontSize: '1.2rem', paddingBottom: '8px', borderBottom: '1px solid #333' }}>
            Seleção do Produto
          </h3>
          <div className="form-row">
            <div className="form-group" style={{ flex: '1 1 100%' }}>
              <label>Produto Final *</label>
              <select value={produtoId} onChange={(e) => setProdutoId(e.target.value)}>
                <option value="">Selecione o Produto</option>
                {produtos.map(p => (
                  <option key={p.id} value={p.id}>{p.nome} (Tamanho {p.tamanho}) - Cód: {p.id}</option>
                ))}
              </select>
            </div>
          </div>

          <h3 style={{ marginTop: '24px', marginBottom: '16px', color: '#fff', fontSize: '1.2rem', paddingBottom: '8px', borderBottom: '1px solid #333' }}>
            Composição: Tecidos
          </h3>
          {itensTecido.map((item, index) => (
            <div className="form-row" key={'tec-'+index} style={{ alignItems: 'flex-end' }}>
              <div className="form-group" style={{ flex: '2' }}>
                <label>Tecido</label>
                <select value={item.tecidoId} onChange={(e) => updateItemTecido(index, 'tecidoId', e.target.value)}>
                  <option value="">Nenhum selecionado</option>
                  {tecidos.map(t => (
                    <option key={t.id} value={t.id}>{t.nome} (Estoque: {t.estoque}{t.unidade} | R${t.preco}/{t.unidade})</option>
                  ))}
                </select>
              </div>
              <div className="form-group" style={{ flex: '1' }}>
                <label>Quantidade gasta</label>
                <input 
                  type="number" 
                  step="0.01" 
                  placeholder="Ex. 0.8" 
                  value={item.quantidade} 
                  onChange={(e) => updateItemTecido(index, 'quantidade', e.target.value)} 
                />
              </div>
            </div>
          ))}
          <button type="button" onClick={() => setItensTecido([...itensTecido, { tecidoId: '', quantidade: '' }])} style={{ background: '#333', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '8px' }}>
            + Adicionar outro Tecido
          </button>

          <h3 style={{ marginTop: '32px', marginBottom: '16px', color: '#fff', fontSize: '1.2rem', paddingBottom: '8px', borderBottom: '1px solid #333' }}>
            Composição: Aviamentos
          </h3>
          {itensAviamento.map((item, index) => (
            <div className="form-row" key={'avi-'+index} style={{ alignItems: 'flex-end' }}>
              <div className="form-group" style={{ flex: '2' }}>
                <label>Aviamento</label>
                <select value={item.aviamentoId} onChange={(e) => updateItemAviamento(index, 'aviamentoId', e.target.value)}>
                  <option value="">Nenhum selecionado</option>
                  {aviamentos.map(a => (
                    <option key={a.id} value={a.id}>{a.tipo} (Estoque: {a.quantidade}{a.unidade} | R${a.preco}/{a.unidade})</option>
                  ))}
                </select>
              </div>
              <div className="form-group" style={{ flex: '1' }}>
                <label>Quantidade gasta</label>
                <input 
                  type="number" 
                  step="0.01" 
                  placeholder="Ex. 2" 
                  value={item.quantidade} 
                  onChange={(e) => updateItemAviamento(index, 'quantidade', e.target.value)} 
                />
              </div>
            </div>
          ))}
          <button type="button" onClick={() => setItensAviamento([...itensAviamento, { aviamentoId: '', quantidade: '' }])} style={{ background: '#333', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', marginTop: '8px' }}>
            + Adicionar outro Aviamento
          </button>

          <h3 style={{ marginTop: '32px', marginBottom: '16px', color: '#fff', fontSize: '1.2rem', paddingBottom: '8px', borderBottom: '1px solid #333' }}>
            Outros Custos
          </h3>
          <div className="form-row">
            <div className="form-group">
              <label>Modelagem</label>
              <select value={modelagemId} onChange={(e) => setModelagemId(e.target.value)}>
                <option value="">Nenhuma selecionada</option>
                {modelagens.map(m => (
                  <option key={m.id} value={m.id}>{m.tipo} - {m.tamanho}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Beneficiamento</label>
              <select value={beneficiamentoId} onChange={(e) => setBeneficiamentoId(e.target.value)}>
                <option value="">Nenhum selecionado</option>
                {beneficiamentos.map(b => (
                  <option key={b.id} value={b.id}>{b.tipo} (Custo: R${b.preco})</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ background: 'rgba(76, 175, 80, 0.1)', padding: '24px', borderRadius: '8px', border: '1px solid #4CAF50', marginTop: '32px', textAlign: 'center' }}>
            <h2 style={{ color: '#4CAF50', margin: 0, fontSize: '1.8rem' }}>Custo Total Calculado: R$ {custoTotal.toFixed(2)}</h2>
          </div>

          <div className="form-actions" style={{ marginTop: '32px' }}>
            <button type="button" className="btn-cancelar" onClick={() => navigate('/fichas-tecnicas')}>Cancelar</button>
            <button type="button" className="btn-salvar" onClick={handleSave}>Salvar Ficha Técnica</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CadastroFichaTecnica;
