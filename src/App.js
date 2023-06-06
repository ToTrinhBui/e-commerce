import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import Done from './pages/Done';
import NotFound from './pages/NotFound';
import ItemLiked from './pages/ItemLiked';

function App() {
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
          <Route path="/404" element={<NotFound />} />
          <Route path="/liked" element={<ItemLiked />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
