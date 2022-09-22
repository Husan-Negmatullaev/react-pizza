import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = ({ currentPage, onChangePage }) => {
   return (
      <div className={styles.pagination}>
         <ReactPaginate
            className={styles.pagination__list}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            forcePage={currentPage - 1}
            pageCount={3}
            renderOnZeroPageCount={null}
         />
      </div>
   )
};

export default Pagination;
