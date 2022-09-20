import React from 'react';

import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

const Home = ({ searchValue }) => {
   const mockApiUrl = 'https://6327376fba4a9c4753333f88.mockapi.io/';

   const [pizzas, setPizzas] = React.useState([]);
   const [isLoaded, setIsLoaded] = React.useState(false);
   const [categoryId, setCategoryId] = React.useState(0);
   const [sortBy, setSortBy] = React.useState({ label: 'популярности (DESC)', sortType: 'rating' });

   React.useEffect(() => {
      setIsLoaded(false);

      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const sort = sortBy.sortType.replace('-', '');
      const order = sortBy.sortType.includes('-') ? 'asc' : 'desc';
      const search = searchValue ? `&search=${searchValue}` : "";

      fetch(`${mockApiUrl}/pizzas?${category}&sortBy=${sort}&order=${order}${search}`)
         .then((res) => res.json())
         .then((data) => {
            setIsLoaded(true);
            setPizzas(data);
         });

      window.scrollTo(0, 0);
   }, [categoryId, sortBy, searchValue]);

   // function filterBySearchValue(items) {
   //    const newItems = items;

   //    if (searchValue && isLoaded) {
   //       return newItems.filter(item => item.title.toLowerCase()
   //          .includes(
   //             searchValue.toLowerCase()
   //          )
   //       )
   //    }

   //    return newItems;
   // }

   const items = pizzas.map((item) => <PizzaBlock key={item.id} {...item} />);

   const pizzasSkeleons = [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />);

   return (
      <div className="container">
         <div className="content__top">
            <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
            <Sort value={sortBy} onClickSort={(type) => setSortBy(type)} />
         </div>
         <h2 className="content__title">Все пиццы</h2>
         <div className="content__items">
            {
               // pizzas.length > 0
               isLoaded ? items : pizzasSkeleons
            }
         </div>
         <Pagination />
      </div>
   );
};

export default Home;