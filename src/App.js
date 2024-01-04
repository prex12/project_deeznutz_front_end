import { Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Products from './Pages/product';
import './App.css';
// import './index.css'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
    </Routes>
  );
}

export default App;
