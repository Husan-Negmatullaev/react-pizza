import React from 'react';

const arrCategories: string[] = [
   "Все",
   "Мясные",
   "Вегетарианская",
   "Гриль",
   "Острые",
   "Закрытые",
]

type CategoriesProps = {
   value: number;
   onClickCategory: (value: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {
  return (
    <div className="categories">
      <ul>
        {
          arrCategories.map((category: string, i: number) => {
            return (
              <li key={i} onClick={() => onClickCategory(i)} className={value === i ? "active" : ""}>
                {category}
              </li>
            )}
          )
        }
      </ul>
    </div>
  )
})

export default Categories;