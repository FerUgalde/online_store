// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import ShoppingList from "./pages/ShoppingList";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Navbar />

      <Catalog />
      <About />
      <ShoppingList />

      <Footer />
    </div>
  );
}

export default App;
