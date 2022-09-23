import React from 'react'

const arrCategories = [
   "Все",
   "Мясные",
   "Вегетарианская",
   "Гриль",
   "Острые",
   "Закрытые",
]

function Categories({ value, onClickCategory }) {

   return (
      <div className="categories">
         <ul>
            {
               arrCategories.map((category, i) => {
                  return <li
                     key={i}
                     onClick={() => onClickCategory(i)}
                     className={value === i ? "active" : ""}
                  >
                     {category}
                  </li>
               })
            }
         </ul>
      </div>
   )
}

export default Categories;