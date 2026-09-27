import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/produits" element={<Products />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/tarifs" element={<Prices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  );
};

export default App;