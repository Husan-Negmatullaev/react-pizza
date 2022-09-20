import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss';

const Pagination = () => {
   console.log(styles);
   return (
      <div className={styles.pagination}>
         <ReactPaginate
            className={styles.pagination__list}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => console.log(event)}
            pageRangeDisplayed={8}
            pageCount={3}
            renderOnZeroPageCount={null}
         />
      </div>
   )
};

export default Pagination;
