import React from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroTecidos = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', animation: 'fadeInDown 0.5s ease-out' }}>
        <button onClick={() => navigate(-1)} className="btn-outline" style={{ marginTop: 0, padding: 0, borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="bi bi-arrow-left" style={{ fontSize: '20px' }}></i>
        </button>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '600', color: 'var(--text-primary)' }}>Cadastrar novo tecido</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '15px' }}>Dados básicos</p>
        </div>
      </div>

      <section className="settings-container" style={{ display: 'block' }}>
        <div className="settings-card" style={{ maxWidth: '700px' }}>
          <form className="settings-form" onSubmit={(e) => { e.preventDefault(); alert('Tecido salvo com sucesso!'); navigate(-1); }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Nome do tecido *</label>
              <input type="text" placeholder="Ex: Malha Premium" required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label>Cor</label>
                <input type="text" placeholder="Ex: Preto" required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label>Peso/Metros</label>
                <input type="text" placeholder="Ex: 50Kg" required />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Composição do tecido</label>
              <input type="text" placeholder="Ex: 100% Algodão" required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label>Gramatura</label>
                <input type="text" placeholder="Ex: 160g" required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label>Fabricante</label>
                <input type="text" placeholder="Ex: Tecelagem XYZ" required />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              <button type="button" className="btn-outline" onClick={() => navigate(-1)} style={{ marginTop: 0, flex: 1, padding: '14px', borderRadius: '12px' }}>Cancelar</button>
              <button type="submit" className="btn-add" style={{ flex: 1, padding: '14px', borderRadius: '12px', background: 'var(--success)' }}>Avançar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CadastroTecidos;
