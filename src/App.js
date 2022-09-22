import React from "react";
import {
   Routes,
   Route
} from 'react-router-dom';

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./scss/app.scss";

export const SearchContext = React.createContext();

function App() {
   const [searchQuery, setSearchQuery] = React.useState('');

   return (
      <div className="wrapper">
         <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
            <Header />
            <div className="content">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </div>
         </SearchContext.Provider>
      </div>
   );
}

export default App;