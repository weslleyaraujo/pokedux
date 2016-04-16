import React, { PropTypes } from 'react';
import ReactPaginator from 'react-paginate';
import styles from './Paginator.css';

const Paginator = ({
  pageNum,
  onClick,
}) => (
  <div className={styles.root}>
    <ReactPaginator
      pageNum={pageNum}
      clickCallback={onClick}
    />
  </div>
);

Paginator.propTypes = {
  pageNum: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Paginator;
