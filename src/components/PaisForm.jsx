import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

function PaisForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: '',
    capital: '',
    continente: '',
    areaKm2: '',
    populacao: ''
  });
  
  const isEdicao = !!id;
  
  useEffect(() => {
    if (isEdicao) {
      carregarPais();
    }
  }, [id]);
  
  const carregarPais = async () => {
    try {
      const response = await api.get(`/paises/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.error("Erro ao carregar país:", error);
      alert("Erro ao carregar dados do país");
      navigate('/');
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.capital || !formData.continente || !formData.areaKm2 || !formData.populacao) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    
    setLoading(true);
    
    try {
      // Converter para número
      const dadosParaEnviar = {
        ...formData,
        areaKm2: Number(formData.areaKm2),
        populacao: Number(formData.populacao)
      };
      
      if (isEdicao) {
        await api.put(`/paises/${id}`, dadosParaEnviar);
        alert("País atualizado com sucesso!");
      } else {
        await api.post('/paises', dadosParaEnviar);
        alert("País cadastrado com sucesso!");
      }
      navigate('/');
    } catch (error) {
      console.error("Erro ao salvar país:", error);
      alert("Erro ao salvar os dados do país");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="container mt-4">
      <h2>{isEdicao ? 'Editar País' : 'Cadastrar Novo País'}</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">Nome</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="capital" className="form-label">Capital</label>
          <input
            type="text"
            className="form-control"
            id="capital"
            name="capital"
            value={formData.capital}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="continente" className="form-label">Continente</label>
          <select
            className="form-control"
            id="continente"
            name="continente"
            value={formData.continente}
            onChange={handleChange}
            required
          >
            <option value="">Selecione um continente</option>
            <option value="África">África</option>
            <option value="América do Norte">América do Norte</option>
            <option value="América do Sul">América do Sul</option>
            <option value="Ásia">Ásia</option>
            <option value="Europa">Europa</option>
            <option value="Europa/Ásia">Europa/Ásia</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label htmlFor="areaKm2" className="form-label">Área (km²)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="areaKm2"
            name="areaKm2"
            value={formData.areaKm2}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="populacao" className="form-label">População</label>
          <input
            type="number"
            className="form-control"
            id="populacao"
            name="populacao"
            value={formData.populacao}
            onChange={handleChange}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary me-2"
          disabled={loading}
        >
          {loading ? 'Salvando...' : 'Salvar'}
        </button>
        
        <button 
          type="button" 
          className="btn btn-secondary"
          onClick={() => navigate('/')}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default PaisForm;