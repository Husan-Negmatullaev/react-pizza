import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import qs from "qs";
import axios from 'axios';

// import { SearchContext } from '../App';
import Sort, { sortList } from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';

const Home = () => {
   const mockApiUrl = 'https://6327376fba4a9c4753333f88.mockapi.io/';

   const {
      categoryId,
      sort,
      currentPage,
      searchQuery
   } = useSelector(state => state.filter);
   const { sortType } = sort;
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [pizzas, setPizzas] = React.useState([]);
   const [isLoaded, setIsLoaded] = React.useState(false);
   const isSearch = React.useRef(false);
   const isMounted = React.useRef(false);

   const fetchPizzas = () => {
      setIsLoaded(false);

      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const sort = sortType.replace('-', '');
      const order = sortType.includes('-') ? 'asc' : 'desc';
      const search = searchQuery ? `&search=${searchQuery}` : "";

      axios.get(
         `${mockApiUrl}/pizzas?&page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`
      )
         .then(res => {
            setIsLoaded(true);
            setPizzas(res.data);
         })
   }

   React.useEffect(() => {
      if (!isSearch.current) {
         fetchPizzas();
      }
      isSearch.current = false;
   }, [categoryId, sortType, searchQuery, currentPage]);

   React.useEffect(() => {
      if (window.location.search) {
         const params = qs.parse(window.location.search.substring(1))
         const sort = sortList.find(obj => obj.sortType === params.sortType);

         dispatch(setFilters({
            ...params,
            sort
         }))

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

   const onClickCategory = (id) => {
      dispatch(setCategoryId(id))
   }

   const onChangePage = (pageNumber) => {
      dispatch(setCurrentPage(pageNumber))
   }

   const items = pizzas.map((item) => <PizzaBlock key={item.id} {...item} />);
   const pizzasSkeleons = [...new Array(4)].map((_, i) => <PizzaSkeleton key={i} />);

   return (
      <div className="container">
         <div className="content__top">
            <Categories value={categoryId} onClickCategory={onClickCategory} />
            <Sort />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               // pizzas.length > 0
               isLoaded ? items : pizzasSkeleons
            }
         </div>
         <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
   );
};

export default Home;