import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Inicializando o estado com dados fixos (mock) para visualização ou buscando do localStorage
  const loadInitialState = (key, defaultData) => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : defaultData;
  };

  const [tecidos, setTecidos] = useState(() => loadInitialState('tecidos', [
    { id: 'TEC-001', nome: 'Malha 100% algodão', composicao: '100% algodão', gramatura: '180 g/m²', estoque: 500, unidade: 'metros', cor: 'Branco', fabricante: 'Loja', preco: 15.00 },
    { id: 'TEC-003', nome: 'Viscose Estampada', composicao: '100% Viscose', gramatura: '120 g/m²', estoque: 320, unidade: 'metros', cor: 'Floral Azul', fabricante: 'Loja', preco: 22.00 },
    { id: 'TEC-004', nome: 'Sarja Premium', composicao: '100% algodão', gramatura: '280 g/m²', estoque: 450, unidade: 'metros', cor: 'Azul Marinho', fabricante: 'Loja', preco: 35.00 },
  ]));

  const [aviamentos, setAviamentos] = useState(() => loadInitialState('aviamentos', [
    { id: 'AVI-001', tipo: 'Zíper Invisível', composicao: 'Nylon', quantidade: 1500, unidade: 'unidades', cor: 'Preto', fabricante: 'YKK', preco: 1.50 },
    { id: 'AVI-002', tipo: 'Botão de Pressão', composicao: 'Metal', quantidade: 5000, unidade: 'unidades', cor: 'Prata', fabricante: 'Eberle', preco: 0.80 },
    { id: 'AVI-003', tipo: 'Linha de Costura', composicao: 'Poliéster', quantidade: 200, unidade: 'cones', cor: 'Branco', fabricante: 'Coats Corrente', preco: 4.50 },
  ]));

  const [modelagens, setModelagens] = useState(() => loadInitialState('modelagens', [
    { id: 'MOD-001', tipo: 'Camisa Social', tamanho: 'M' },
    { id: 'MOD-002', tipo: 'Calça Jeans Skinny', tamanho: '38' },
    { id: 'MOD-003', tipo: 'Vestido Evazê', tamanho: 'P' },
  ]));

  const [beneficiamentos, setBeneficiamentos] = useState(() => loadInitialState('beneficiamentos', [
    { id: 'BEN-001', tipo: 'Digital A4', preco: 10.00 },
    { id: 'BEN-002', tipo: 'Bordado Peito', preco: 8.50 },
    { id: 'BEN-003', tipo: 'Sublimação Total', preco: 15.00 },
  ]));

  const [produtos, setProdutos] = useState(() => loadInitialState('produtos', []));
  const [fichasTecnicas, setFichasTecnicas] = useState(() => loadInitialState('fichasTecnicas', []));

  // Salvando no localStorage sempre que houver mudanças
  useEffect(() => localStorage.setItem('tecidos', JSON.stringify(tecidos)), [tecidos]);
  useEffect(() => localStorage.setItem('aviamentos', JSON.stringify(aviamentos)), [aviamentos]);
  useEffect(() => localStorage.setItem('modelagens', JSON.stringify(modelagens)), [modelagens]);
  useEffect(() => localStorage.setItem('beneficiamentos', JSON.stringify(beneficiamentos)), [beneficiamentos]);
  useEffect(() => localStorage.setItem('produtos', JSON.stringify(produtos)), [produtos]);
  useEffect(() => localStorage.setItem('fichasTecnicas', JSON.stringify(fichasTecnicas)), [fichasTecnicas]);

  // Valores disponíveis globalmente
  const value = {
    tecidos, setTecidos,
    aviamentos, setAviamentos,
    modelagens, setModelagens,
    beneficiamentos, setBeneficiamentos,
    produtos, setProdutos,
    fichasTecnicas, setFichasTecnicas
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
