import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Done from './pages/Done';
import NotFound from './pages/NotFound';
import ItemLiked from './pages/ItemLiked';
import Category from './pages/Category';
import { CartContext } from './context/CartContext';
import Notification from './components/Notification';
import Search from './pages/Search';

function App() {
  const { showNotification } = useContext(CartContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Done />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/liked" element={<ItemLiked />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
      {showNotification && <Notification />}
    </div>
  );
}

export default App;
