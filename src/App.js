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

function App() {
   const [searchQuery, setSearchQuery] = React.useState('');
   return (
      <div className="wrapper">
         <Header value={searchQuery} onChangeInput={(query) => setSearchQuery(query)} />
         <div className="content">
            <Routes>
               <Route path="/" element={<Home searchValue={searchQuery} />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;