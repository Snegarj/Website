
import './App.css';
import './style.css';
import Sidebar from './sidebar';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./cart/cart";
import Wishlist from "./wishlist/";
function App() {

  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/" index element={<Sidebar />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
