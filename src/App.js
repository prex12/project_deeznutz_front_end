import { Routes, Route } from 'react-router-dom'
import Navlayout from './Layouts/navlayout';
import Home from './Pages/home'
import Products from './Pages/product';
import './App.css';
// import './index.css'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<Navlayout />}>
          <Route path='products' element={<Products />} />
        </Route>
    </Routes>
  );
}

export default App;
