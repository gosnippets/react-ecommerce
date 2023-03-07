import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import PageLayout from './pages/PageLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemDetails from './pages/ItemDetails';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import Register from './pages/Register';
import Favorite from './pages/Favorite';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/favorite" element={<Favorite />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/item/:id" element={<ItemDetails />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
