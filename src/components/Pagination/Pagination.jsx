import React, { useState } from 'react';
import { Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyPagination({ currentPage, handlePageChange, lastPage }) {

  return (
    <>
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
        {[...Array(lastPage).keys()].map((page) => (
          <Pagination.Item
            key={page}
            active={page + 1 === currentPage}
            onClick={() => handlePageChange(page + 1)}
          >
           {page + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
        <Pagination.Last onClick={() => handlePageChange(lastPage)} />
      </Pagination>
    </>
  );
}

export default MyPagination;