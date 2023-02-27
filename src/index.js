import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Business,AboutUs,Order} from "../src/components"
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router>
)