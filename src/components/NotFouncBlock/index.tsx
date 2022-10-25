import React from 'react'

import styles from "./NotFouncBlock.module.scss";

const NotFouncBlock: React.FC = () => {
   return (
      <h1 className={styles.root}>
         <span>:(</span>
         <br />
         Ничего не найдено!
      </h1>
   )
}

export default NotFouncBlock;
