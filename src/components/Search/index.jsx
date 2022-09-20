import React from 'react';

import styles from './Search.module.scss';

const Search = ({ value, onChangeInput }) => {

   const onChangeEvent = (event) => {
      onChangeInput(event.target.value);
   };

   return (
      <div className={styles.searchHeader}>
         <svg className={styles.searchHeader__icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title /><g id="search"><path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" /></g></svg>
         <input
            onChange={onChangeEvent}
            value={value}
            className={styles.searchHeader__input}
            placeholder='Поиск пиццы...'
         />
         <button onClick={() => onChangeInput("")} className={styles.searchHeader__button}>
            {
               value && <svg className={styles.searchHeader__icon_cross} enableBackground="new 0 0 32 32" height="32px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg"><path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z" id="Close" /><g /><g /><g /><g /><g /><g /></svg>
            }
         </button>
      </div>
   )
}

export default Search;
