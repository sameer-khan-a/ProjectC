import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductHome from './pages/Products/ProductHome';
import ContactUs from './pages/ContactUs';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LightingProducts from './pages/Products/LightingProducts';
import SmartElectricals from './pages/Products/SmartElectricals';
import ContactForm from './pages/ContactForm';
import SolarProducts from './pages/Products/SolarProducts';
import ElectricalRange from './pages/Products/ElectricalRange';
import HomeAutomation from './pages/Products/HomeAutomation';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductHome />} />
        <Route path="/Lightings" element={<LightingProducts />} />
        <Route path="/smart-electricals" element={<SmartElectricals />} />
        <Route path="/ContactUs" element={<ContactForm />} />
        <Route path="/SolarProducts" element={<SolarProducts />} />
        <Route path="/ElectricalRange" element={<ElectricalRange />} />
        <Route path="/HomeAutomation" element={<HomeAutomation />} />
      </Routes>
    </div>
  );
}

export default App;
