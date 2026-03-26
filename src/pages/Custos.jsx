import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import { AppContext } from '../context/AppContext';

const Custos = () => {
  const { 
    tecidos, setTecidos,
    aviamentos, setAviamentos,
    beneficiamentos, setBeneficiamentos,
    produtos, setProdutos
  } = useContext(AppContext);

  const [activeTab, setActiveTab] = useState('tabela-precos');

  // Input states locale
  const [precoTecidos, setPrecoTecidos] = useState({});
  const [precoAviamentos, setPrecoAviamentos] = useState({});
  const [precoBeneficiamentos, setPrecoBeneficiamentos] = useState({});
  const [vendaProdutos, setVendaProdutos] = useState({});

  // handlers temporários (atualiza visual antes de salvar globamente)
  const handlePrecoChange = (setter, id, value) => {
    setter(prev => ({ ...prev, [id]: value }));
  };

  const handleSalvarPrecosEstoque = () => {
    // Atualizar os tecidos
    const newTecidos = tecidos.map(t => {
      if (precoTecidos[t.id] !== undefined) {
        return { ...t, preco: parseFloat(precoTecidos[t.id]) };
      }
      return t;
    });
    setTecidos(newTecidos);

    // Atualizar os aviamentos
    const newAviamentos = aviamentos.map(a => {
      if (precoAviamentos[a.id] !== undefined) {
        return { ...a, preco: parseFloat(precoAviamentos[a.id]) };
      }
      return a;
    });
    setAviamentos(newAviamentos);

    // Atualizar beneficiamentos
    const newBeneficiamentos = beneficiamentos.map(b => {
      if (precoBeneficiamentos[b.id] !== undefined) {
        return { ...b, preco: parseFloat(precoBeneficiamentos[b.id]) };
      }
      return b;
    });
    setBeneficiamentos(newBeneficiamentos);

    alert("Tabela de preços de estoque atualizada com sucesso!");
    setPrecoTecidos({});
    setPrecoAviamentos({});
    setPrecoBeneficiamentos({});
  };

  const handleSalvarValoresVenda = () => {
    const newProdutos = produtos.map(p => {
      if (vendaProdutos[p.id] !== undefined) {
        return { ...p, valorVenda: parseFloat(vendaProdutos[p.id]) };
      }
      return p;
    });
    setProdutos(newProdutos);
    alert("Valores de venda atualizados com sucesso!");
    setVendaProdutos({});
  };

  return (
    <>
      <Header title="Gestão de Custos" subtitle="Controle as tabelas de preços e os valores de venda do produto final" />
      
      <section className="pedidos-container">
        
        {/* TAB NAVIGATION */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', borderBottom: '1px solid #333', paddingBottom: '16px' }}>
          <button 
            style={{ 
              background: activeTab === 'tabela-precos' ? '#4CAF50' : 'transparent',
              color: activeTab === 'tabela-precos' ? '#fff' : '#aaa',
              border: '1px solid #4CAF50',
              padding: '8px 24px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => setActiveTab('tabela-precos')}
          >
            Tabela de Preços (Estoque)
          </button>
          <button 
            style={{ 
              background: activeTab === 'venda-produtos' ? '#4CAF50' : 'transparent',
              color: activeTab === 'venda-produtos' ? '#fff' : '#aaa',
              border: '1px solid #4CAF50',
              padding: '8px 24px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => setActiveTab('venda-produtos')}
          >
            Valor de Venda (Produtos)
          </button>
        </div>

        {/* TAB 1: TABELA DE PREÇOS */}
        {activeTab === 'tabela-precos' && (
          <div className="fade-in">
            <h3 style={{ color: '#fff', marginBottom: '24px' }}>Tecidos</h3>
            <div className="table-responsive">
              <table style={{ width: '100%', color: '#ccc', borderCollapse: 'collapse', marginBottom: '32px' }}>
                <thead>
                  <tr style={{ background: '#222', textAlign: 'left' }}>
                    <th style={{ padding: '12px' }}>Código</th>
                    <th style={{ padding: '12px' }}>Nome</th>
                    <th style={{ padding: '12px' }}>Preço Atual</th>
                    <th style={{ padding: '12px' }}>Novo Preço (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {tecidos.map(t => (
                    <tr key={t.id} style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '12px' }}>{t.id}</td>
                      <td style={{ padding: '12px' }}>{t.nome}</td>
                      <td style={{ padding: '12px' }}>R$ {parseFloat(t.preco || 0).toFixed(2)} / {t.unidade}</td>
                      <td style={{ padding: '12px' }}>
                        <input 
                          type="number" 
                          step="0.01" 
                          style={{ width: '120px', padding: '6px', background: '#333', border: '1px solid #555', color: '#fff', borderRadius: '4px' }} 
                          value={precoTecidos[t.id] !== undefined ? precoTecidos[t.id] : ''}
                          onChange={(e) => handlePrecoChange(setPrecoTecidos, t.id, e.target.value)}
                          placeholder="Ex 15.00"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ color: '#fff', marginBottom: '24px' }}>Aviamentos</h3>
            <div className="table-responsive">
              <table style={{ width: '100%', color: '#ccc', borderCollapse: 'collapse', marginBottom: '32px' }}>
                <thead>
                  <tr style={{ background: '#222', textAlign: 'left' }}>
                    <th style={{ padding: '12px' }}>Código</th>
                    <th style={{ padding: '12px' }}>Tipo</th>
                    <th style={{ padding: '12px' }}>Preço Atual</th>
                    <th style={{ padding: '12px' }}>Novo Preço (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {aviamentos.map(a => (
                    <tr key={a.id} style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '12px' }}>{a.id}</td>
                      <td style={{ padding: '12px' }}>{a.tipo}</td>
                      <td style={{ padding: '12px' }}>R$ {parseFloat(a.preco || 0).toFixed(2)} / {a.unidade}</td>
                      <td style={{ padding: '12px' }}>
                        <input 
                          type="number" 
                          step="0.01" 
                          style={{ width: '120px', padding: '6px', background: '#333', border: '1px solid #555', color: '#fff', borderRadius: '4px' }} 
                          value={precoAviamentos[a.id] !== undefined ? precoAviamentos[a.id] : ''}
                          onChange={(e) => handlePrecoChange(setPrecoAviamentos, a.id, e.target.value)}
                          placeholder="Ex 1.50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ color: '#fff', marginBottom: '24px' }}>Beneficiamentos</h3>
            <div className="table-responsive">
              <table style={{ width: '100%', color: '#ccc', borderCollapse: 'collapse', marginBottom: '32px' }}>
                <thead>
                  <tr style={{ background: '#222', textAlign: 'left' }}>
                    <th style={{ padding: '12px' }}>Código</th>
                    <th style={{ padding: '12px' }}>Tipo</th>
                    <th style={{ padding: '12px' }}>Preço Atual</th>
                    <th style={{ padding: '12px' }}>Novo Preço (R$)</th>
                  </tr>
                </thead>
                <tbody>
                  {beneficiamentos.map(b => (
                    <tr key={b.id} style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '12px' }}>{b.id}</td>
                      <td style={{ padding: '12px' }}>{b.tipo}</td>
                      <td style={{ padding: '12px' }}>R$ {parseFloat(b.preco || 0).toFixed(2)}</td>
                      <td style={{ padding: '12px' }}>
                        <input 
                          type="number" 
                          step="0.01" 
                          style={{ width: '120px', padding: '6px', background: '#333', border: '1px solid #555', color: '#fff', borderRadius: '4px' }} 
                          value={precoBeneficiamentos[b.id] !== undefined ? precoBeneficiamentos[b.id] : ''}
                          onChange={(e) => handlePrecoChange(setPrecoBeneficiamentos, b.id, e.target.value)}
                          placeholder="Ex 10.00"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <button className="btn-salvar" onClick={handleSalvarPrecosEstoque}>Atualizar Preços do Estoque</button>

          </div>
        )}

        {/* TAB 2: VALOR DE VENDA */}
        {activeTab === 'venda-produtos' && (
          <div className="fade-in">
            <h3 style={{ color: '#fff', marginBottom: '24px' }}>Métricas de Produtos</h3>
            
            {produtos.length === 0 ? (
              <p style={{ color: '#aaa' }}>Não há produtos cadastrados.</p>
            ) : (
              <>
                <div className="table-responsive" style={{ marginBottom: '32px' }}>
                  <table style={{ width: '100%', color: '#ccc', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: '#222', textAlign: 'left' }}>
                        <th style={{ padding: '12px' }}>Produto</th>
                        <th style={{ padding: '12px' }}>Tamanho</th>
                        <th style={{ padding: '12px' }}>Custo (Ficha Técnica)</th>
                        <th style={{ padding: '12px' }}>Valor de Venda Atual</th>
                        <th style={{ padding: '12px' }}>Lucro Bruto (Margem)</th>
                        <th style={{ padding: '12px' }}>Novo Vlr de Venda (R$)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {produtos.map(p => {
                        const custo = typeof p.custoTotal === 'number' ? Math.max(p.custoTotal, 0) : 0;
                        const vendaValue = typeof p.valorVenda === 'number' && !isNaN(p.valorVenda) ? p.valorVenda : 0;
                        const displayVenda = p.valorVenda ? `R$ ${p.valorVenda.toFixed(2)}` : 'Não definido';
                        
                        let margemText = '-';
                        if (vendaValue > 0 && custo > 0) {
                          const lucro = vendaValue - custo;
                          const margem = (lucro / vendaValue) * 100;
                          margemText = `R$ ${lucro.toFixed(2)} (${margem.toFixed(1)}%)`;
                        } else if (vendaValue > 0 && custo === 0) {
                          margemText = `R$ ${vendaValue.toFixed(2)} (Sem Ficha)`;
                        }

                        return (
                          <tr key={p.id} style={{ borderBottom: '1px solid #333' }}>
                            <td style={{ padding: '12px' }}>{p.nome} <br/><small style={{ color: '#888' }}>{p.id}</small></td>
                            <td style={{ padding: '12px' }}>{p.tamanho}</td>
                            <td style={{ padding: '12px', color: custo > 0 ? '#4CAF50' : '#E91E63' }}>
                              {custo > 0 ? `R$ ${custo.toFixed(2)}` : 'Falta Ficha'}
                            </td>
                            <td style={{ padding: '12px' }}>{displayVenda}</td>
                            <td style={{ padding: '12px', color: vendaValue > custo ? '#4CAF50' : '#E91E63' }}>
                              {margemText}
                            </td>
                            <td style={{ padding: '12px' }}>
                              <input 
                                type="number" 
                                step="0.01" 
                                style={{ width: '120px', padding: '6px', background: '#333', border: '1px solid #555', color: '#fff', borderRadius: '4px' }} 
                                value={vendaProdutos[p.id] !== undefined ? vendaProdutos[p.id] : ''}
                                onChange={(e) => handlePrecoChange(setVendaProdutos, p.id, e.target.value)}
                                placeholder="Novo Valor"
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <button className="btn-salvar" onClick={handleSalvarValoresVenda}>Atualizar Valores de Venda</button>
              </>
            )}
          </div>
        )}

      </section>
    </>
  );
};

export default Custos;
