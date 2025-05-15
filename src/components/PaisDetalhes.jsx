// src/components/PaisDetalhes.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

function PaisDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pais, setPais] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    carregarPais();
  }, [id]);
  
  const carregarPais = async () => {
    try {
      const response = await api.get(`/paises/${id}`);
      setPais(response.data);
    } catch (error) {
      console.error("Erro ao carregar país:", error);
      alert("Erro ao carregar dados do país");
      navigate('/');
    } finally {
      setLoading(false);
    }
  };
  
  const handleExcluir = async () => {
    if (window.confirm("Tem certeza que deseja excluir este país?")) {
      try {
        await api.delete(`/paises/${id}`);
        alert("País excluído com sucesso!");
        navigate('/');
      } catch (error) {
        console.error("Erro ao excluir país:", error);
        alert("Erro ao excluir o país");
      }
    }
  };
  
  if (loading) {
    return <div className="container mt-4">Carregando...</div>;
  }
  
  if (!pais) {
    return <div className="container mt-4">País não encontrado</div>;
  }
  
  return (
    <div className="container mt-4">
      <h2>{pais.nome}</h2>
      
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>Capital:</strong> {pais.capital}</p>
          <p><strong>Continente:</strong> {pais.continente}</p>
          <p><strong>Área:</strong> {pais.areaKm2.toLocaleString()} km²</p>
          <p><strong>População:</strong> {pais.populacao.toLocaleString()} habitantes</p>
        </div>
      </div>
      
      <div className="mb-4">
        <Link to="/" className="btn btn-secondary me-2">Voltar</Link>
        <Link to={`/paises/editar/${pais.id}`} className="btn btn-warning me-2">Editar</Link>
        <button className="btn btn-danger" onClick={handleExcluir}>Excluir</button>
      </div>
    </div>
  );
}

export default PaisDetalhes;