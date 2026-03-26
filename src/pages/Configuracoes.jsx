import React from 'react';
import Header from '../components/Header';

const Configuracoes = () => {
  return (
    <>
      <Header title="Configurações" subtitle="Ajustes e preferências do sistema" />

      <section className="settings-container">
        {/* SEÇÃO: SUAS INFORMAÇÕES */}
        <div className="settings-card">
          <h2>Suas informações</h2>
          <form className="settings-form" onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Nome:</label>
              <input type="text" placeholder="Nome Completo" defaultValue="João Silva" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>CPF:</label>
              <input type="text" placeholder="000.000.000-00" defaultValue="123.456.789-00" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Email:</label>
              <input type="email" placeholder="usuario@gmail.com" defaultValue="joao.silva@fabrikaweb.com" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Telefone:</label>
              <input type="text" placeholder="(00) 0 0000-0000" defaultValue="(11) 9 9999-9999" />
            </div>

            <button type="button" className="btn-outline">Salvar Alterações</button>
          </form>
        </div>

        <div>
          {/* SEÇÃO: NOTIFICAÇÕES */}
          <div className="settings-card" style={{ marginBottom: '24px' }}>
            <h2>Notificações</h2>
            <div className="notificacoes">
              <div className="setting-item">
                <span>Notificações de Pedidos</span>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <span>Alertas de Estoque Baixo</span>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="setting-item">
                <span>Atualizações de Produção</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* SEÇÃO: IDIOMA */}
          <div className="settings-card">
            <h2>Idioma</h2>
            <div className="setting-item" style={{ border: 'none', padding: 0 }}>
              <span>Português - Brasil</span>
              <button className="btn-outline" style={{ marginTop: 0, padding: '4px 12px' }}>Alterar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Configuracoes;
