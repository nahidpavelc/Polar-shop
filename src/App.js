import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cover from "./Pages/Home/Cover/Cover";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";
import Contactus from "./Pages/Cotactus/Contactus";
import Products from "./Pages/Products/Products";
import Aboutus from "./Pages/Home/Aboutus/Aboutus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>

          <Route path="/Products" element={<Products />}/>
          <Route path="/Aboutus" element={<Aboutus />}/>

          <Route path="/Contactus" element={<Contactus />}/>

          {/* <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
        </Routes>
        <Footer></Footer> 
      </BrowserRouter>
    </div>
  );
}

export default App;
