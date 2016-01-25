import React, { Component } from 'react';
import ReactPaginator from 'react-paginate';
import styles from './Paginator.css';

const Paginator = ({
  pageNum,
  onClick,
}) => (
  <div className={styles.root}>
    <ReactPaginator
      pageNum={pageNum}
      clickCallback={onClick} />
  </div>
);

export default Paginator;
