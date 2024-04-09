// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import ShoppingList from "./pages/ShoppingList";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import GlobalProvider from "./context/GlobalProvider";
import Cart from "./pages/Cart";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          {/* <Navbar></Navbar> */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
            <Route path="/shoppingList" element={<ShoppingList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
