import React, { Suspense } from 'react';
import {
   Routes,
   Route
} from 'react-router-dom';

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
// import NotFound from './pages/NotFound';
import "./scss/app.scss";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ "./pages/Cart"));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */ "./pages/FullPizza"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound"));

function App() {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />} >
            <Route path="" element={<Home />} />
            <Route path="cart" element={
               <Suspense fallback={<div>Загрузка корзины...</div>}>
                  <Cart />
               </Suspense>
            } />
            <Route path="pizza/:pizzaId" element={
               <Suspense fallback={<div>Загрузка пиццы...</div>}>
                  <FullPizza />
               </Suspense>
            } />
            <Route path="*" element={
               <Suspense fallback={<div>Загрузка компонента...</div>}>
                  <NotFound />
               </Suspense>
            } />
         </Route>
      </Routes>
   );
}

export default App;