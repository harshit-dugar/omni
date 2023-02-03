import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Business,AboutUs,Order} from "../src/components"
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/business" element={<Business />} />
        <Route path="/order" element={<Order />} />
        </Routes>
    </Router>
)