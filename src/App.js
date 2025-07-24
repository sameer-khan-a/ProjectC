import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductHome from './pages/Products/ProductHome';
import ContactUs from './pages/ContactUs';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<ProductHome />} />
      </Routes>
    </div>
  );
}

export default App;
