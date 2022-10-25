import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import qs from "qs";

import SortPopup, { sortList } from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import { selectFilter } from '../redux/filter/selectors';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import { fetchPizzas } from '../redux/pizzas/asyncActions';
import { FetchPizzasArgs } from '../redux/pizzas/types';
import { selectPizza } from '../redux/pizzas/selectors';
import { AppDisptach } from '../redux/store';

const Home: React.FC = () => {   
   const {
      categoryId,
      sort,
      currentPage,
      searchQuery
   } = useSelector(selectFilter);
   const { pizzasItems, status } = useSelector(selectPizza);
   const { sortType } = sort;

   const dispatch = AppDisptach();
   const navigate = useNavigate();

   const isSearch = React.useRef<boolean>(false);
   const isMounted = React.useRef<boolean>(false);

   const getPizzas = async () => {
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const sortBy = sortType.replace('-', '');
      const order = sortType.includes('-') ? 'asc' : 'desc';
      const search = searchQuery ? `&search=${searchQuery}` : "";
      
      dispatch(
         fetchPizzas({
            category,
            sortBy,
            order,
            search,
            currentPage: String(currentPage),
         })
      );
   }

   React.useEffect(() => {
      if (!isSearch.current) {
         getPizzas();
      }
      isSearch.current = false;
   }, [categoryId, sortType, searchQuery, currentPage]);
   
   React.useEffect(() => {
      if (window.location.search) {
         const params = (qs.parse(window.location.search.substring(1)) as unknown) as FetchPizzasArgs;
         const sort = sortList.find(obj => obj.sortType === params.sortBy);
         
         dispatch(setFilters(
            {
               categoryId: Number(params.category),
               currentPage: Number(params.currentPage),
               searchQuery: "",
               sort: sort || sortList[0],
            } 
         ))

         isSearch.current = true;
      }
   }, [])

   React.useEffect(() => {
      if (isMounted.current) {
         const queryString = qs.stringify({
            categoryId,
            sortType,
            currentPage,
         });

         navigate(`?${queryString}`);
      }
      isMounted.current = true;
   }, [categoryId, sortType, currentPage, navigate])

   const onClickCategory = React.useCallback((id: number): void => {
      dispatch(setCategoryId(id))
   }, [])

   const onChangePage = (pageNumber: number) => {
      dispatch(setCurrentPage(pageNumber))
   }

   const items = pizzasItems.map((item: any) => <PizzaBlock key={item.id} {...item} />);
   const pizzasSkeleons = [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />);

   return (
      <div className="container">
         <div className="content__top">
            <Categories value={categoryId} onClickCategory={onClickCategory} />
            <SortPopup value={sort} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         {
            status === "error" ? (
               <div className="content__error">
                  <h2>Изивните но произошла ошибка</h2>
               </div>
            ) : (
               <div className="content__items">
                  {status === "success" ? items : pizzasSkeleons}
               </div>
            )
         }
         <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
   );
};

export default Home;