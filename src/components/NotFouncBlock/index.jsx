import React from 'react'

import styles from "./NotFouncBlock.module.scss";

const NotFouncBlock = () => {
   return (
      <h1 className={styles.root}>
         <span>:(</span>
         <br />
         Ничего не найдено!
      </h1>
   )
}

export default NotFouncBlock;
