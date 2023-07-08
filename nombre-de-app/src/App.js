import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicExample from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import Home from './components/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <BasicExample />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:id" element={<ItemListContainer />} />
          {/* <Route exact path="/item/:id" element={<ItemDetailContainer />} /> */}
        </Routes>
        <ItemListContainer greeting="" />
      </BrowserRouter>
    </>
  );
}