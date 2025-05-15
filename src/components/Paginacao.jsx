// src/components/Paginacao.jsx
import React from 'react';

function Paginacao({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  
  for (let i = 0; i < totalPages; i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 0}
          >
            Anterior
          </button>
        </li>
        
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button 
              className="page-link" 
              onClick={() => onPageChange(number)}
            >
              {number + 1}
            </button>
          </li>
        ))}
        
        <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            Próximo
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Paginacao;