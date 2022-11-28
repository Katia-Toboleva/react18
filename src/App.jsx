import React from 'react';
import './styles/App.css';
import Products from './components/Products/Products';
import Songs from './components/Songs/Songs';
import Home from './components/Home/Home'
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src="https://ucarecdn.com/d5503b06-ce10-4651-8b9b-d5c3bb7249ad/" className="App-logo" alt="logo" />
        </Link>
      </header>
      <div className="container">
        <div>
          <Link to="/products">Products</Link>
        </div>
        <div>
          <Link to="/songs">Songs</Link>
        </div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/songs' element={<Songs />} />
      </Routes>
    </div>
  );
}

export default App;
