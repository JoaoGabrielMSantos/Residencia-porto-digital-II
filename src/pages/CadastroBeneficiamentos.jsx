import React from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroBeneficiamentos = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', animation: 'fadeInDown 0.5s ease-out' }}>
        <button onClick={() => navigate(-1)} className="btn-outline" style={{ marginTop: 0, padding: 0, borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="bi bi-arrow-left" style={{ fontSize: '20px' }}></i>
        </button>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '600', color: 'var(--text-primary)' }}>Cadastrar novo beneficiamento</h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '15px' }}>Dados básicos</p>
        </div>
      </div>

      <section className="settings-container" style={{ display: 'block' }}>
        <div className="settings-card" style={{ maxWidth: '700px' }}>
          <form className="settings-form" onSubmit={(e) => { e.preventDefault(); alert('Beneficiamento salvo com sucesso!'); navigate(-1); }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label>Tipo de beneficiamento *</label>
              <select required style={{
                background: 'rgba(255,255,255,0.02)', 
                border: '1px solid var(--border-color)', 
                color: 'var(--text-primary)', 
                padding: '14px 16px', 
                borderRadius: '10px', 
                fontSize: '14px', 
                outline: 'none',
                width: '100%',
                appearance: 'auto'
              }}>
                <option value="" disabled selected style={{ color: '#000' }}>Selecione o tipo</option>
                <option value="digital-a3" style={{ color: '#000' }}>Digital [A3]</option>
                <option value="digital-a4" style={{ color: '#000' }}>Digital [A4]</option>
                <option value="digital-peito" style={{ color: '#000' }}>Digital [Peito]</option>
                <option value="digital-manga" style={{ color: '#000' }}>Digital [Manga]</option>
                <option value="bordado-peito" style={{ color: '#000' }}>Bordado [Peito]</option>
                <option value="bordado-manga" style={{ color: '#000' }}>Bordado [Manga]</option>
                <option value="bordado-costas" style={{ color: '#000' }}>Bordado [Costas]</option>
                <option value="sublimacao-local" style={{ color: '#000' }}>Sublimação [Local]</option>
                <option value="sublimacao-total" style={{ color: '#000' }}>Sublimação [Total]</option>
                <option value="serigrafia" style={{ color: '#000' }}>Serigrafia</option>
              </select>
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

export default CadastroBeneficiamentos;
