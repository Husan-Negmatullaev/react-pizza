import React from 'react'

function Categories({value, onClickCategory}) {
   const arrCategories = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
   ]

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