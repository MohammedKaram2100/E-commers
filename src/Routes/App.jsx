import {Toaster} from 'react-hot-toast';
import '../css/index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../layouts/Layout';
import ProductId from '../page/home/ProductId';
import PageCarde from '../page/PageCarde';
import Login from '../page/login';
import Rejester from '../page/Rejester';
import Home from '../page/home/Home';
export default function App() {
  return (
    <div className=" w-full min-h-screen bg-white text-black">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:ProductId" element={<ProductId />} />
            <Route
              path="*"
              element={<h1 className=" font-bold text-black">404 Not Found</h1>}
            />
            <Route path="/carde" element={<PageCarde />} />
          </Route>
          <Route path="/rejester" element={<Rejester />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
