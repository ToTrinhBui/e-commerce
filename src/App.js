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
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
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
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
