import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Product from './Compun/Product';
import {Toaster} from 'react-hot-toast';

import Cardebage from './Compun/Cardebage';
import Login from './Login';
import Rejester from './Rejester';
import Leuty from './Leuty';
import Productbage from './Productbage';

export default function App() {
  return (
    <>
      <div className=" w-full  bg-[#FFFFFF] min-h-[100vh] text-black">
        <Toaster position="top-center" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Leuty />}>
              <Route index element={<Product />} />
              <Route path="CardBage" element={<Cardebage />} />
              <Route path="Productbage/:ProductId" element={<Productbage />} />
              <Route path="abouty" element={<h1>Abuty page</h1>} />
            </Route>
            <Route path="Login" element={<Login />} />
            <Route path="Rejester" element={<Rejester />} />
            <Route path="*" element={<h1>404 page</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
