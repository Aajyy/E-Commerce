import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/mens" element={<ShopCategory  category="mens"/>} />
        <Route path="/women" element={<ShopCategory category="women"/>} />
        <Route path="/kids" element={<ShopCategory  category="kids"/>} />
       
       
        <Route path="/product" element={<Product />}>
        <Route path=":productId" element={<Product />} /> 
          <Route path="/cart" element={<Cart/>} />
        </Route>

         </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
