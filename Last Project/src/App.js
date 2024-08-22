import "./css/style.css";
import "./App.css";
import Header from "./common/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cart, Home, Shop } from "./pages";
import Footer from "./common/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Contact from "./pages/ContactUS/Contact";
import About from "./pages/AboutPage/About";
import MoreProducts from "./pages/MoreProducts"; 
import Category from "./common/Category";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import AdminPanel from "./pages/AdminPanel/AdminPanel";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/more-products" element={<MoreProducts />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
