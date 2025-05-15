import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Paginacao from './Paginacao';

function PaisesLista() {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [busca, setBusca] = useState('');
  
  const carregarPaises = async (page = 0, nome = '') => {
    setLoading(true);
    try {
      let url = `/paises?page=${page}&size=10&sort=nome,asc`;
      if (nome) {
        url += `&nome=${nome}`;
      }
      const response = await api.get(url);
      setPaises(response.data.content);
      setTotalPages(response.data.totalPages);
      setTotalElements(response.data.totalElements);
      setCurrentPage(response.data.number);
    } catch (error) {
      console.error("Erro ao carregar países:", error);
      alert("Erro ao carregar a lista de países");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarPaises(0, busca);
  }, []);

  const handleBusca = () => {
    carregarPaises(0, busca);
  };

  const handlePageChange = (page) => {
    carregarPaises(page, busca);
  };

  const handleExcluir = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este país?")) {
      try {
        await api.delete(`/paises/${id}`);
        carregarPaises(currentPage, busca);
        alert("País excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir país:", error);
        alert("Erro ao excluir o país");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Países</h2>
      
      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Buscar país..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleBusca}>Buscar</button>
      </div>
      
      <Link to="/paises/novo" className="btn btn-success mb-3">Adicionar País</Link>
      
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Capital</th>
                <th>Continente</th>
                <th>População</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {paises.map((pais) => (
                <tr key={pais.id}>
                  <td>{pais.nome}</td>
                  <td>{pais.capital}</td>
                  <td>{pais.continente}</td>
                  <td>{pais.populacao.toLocaleString()}</td>
                  <td>
                    <Link to={`/paises/${pais.id}`} className="btn btn-info btn-sm me-2">Ver</Link>
                    <Link to={`/paises/editar/${pais.id}`} className="btn btn-warning btn-sm me-2">Editar</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => handleExcluir(pais.id)}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <Paginacao 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          
          <p>Total de países: {totalElements}</p>
        </>
      )}
    </div>
  );
}

export default PaisesLista;