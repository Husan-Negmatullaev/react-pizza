import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setSort } from "../redux/slices/filterSlice";

export const sortList = [
   { label: "популярности (DESC)", sortType: "rating" },
   { label: "популярности (ASC)", sortType: "-rating" },
   { label: "цене (DESC)", sortType: "price" },
   { label: "цене (ASC)", sortType: "-price" },
   { label: "алфавиту (DESC)", sortType: "title" },
   { label: "алфавиту (ASC)", sortType: "-title" }
];

function Sort() {
   // const [open, setOpen] = React.useState(false);
   const sort = useSelector(state => state.filter.sort)
   const dispatch = useDispatch();
   const sortRef = useRef();

   const onClickMenuItem = (obj) => {
      dispatch(setSort(obj));
      // setOpen(false);
   };

   React.useEffect(() => {
      const documentActions = (e) => {
         const targetItem = e.target;

         if (targetItem.closest(".sort")) {
            targetItem.closest(".sort").classList.toggle("_click");
         }
         if (!targetItem.closest(".sort") && document.querySelector(".sort._click")) {
            document.querySelector(".sort._click").classList.remove("_click");
         }
      }

      document.addEventListener("click", documentActions);

      return () => {
         document.removeEventListener("click", documentActions);
      }
   }, [])

   return (
      <div
         ref={sortRef}
         className="sort"
      >
         <div className="sort__label">
            <svg
               width="10"
               height="6"
               viewBox="0 0 10 6"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
               />
            </svg>
            <b>Сортировка по:</b>
            <span>{sort.label}</span>
         </div>
         <div className="sort__popup">
            <ul>
               {sortList.map((obj, i) => (
                  <li key={i} onClick={() => onClickMenuItem(obj)} className={sort.sortType === obj.sortType ? "active" : ""}>
                     {obj.label}
                  </li>
               )
               )}
            </ul>
         </div>
      </div>
   );
}

export default Sort;