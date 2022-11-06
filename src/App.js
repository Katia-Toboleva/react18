import React from 'react';
import './styles/App.css';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://ucarecdn.com/d5503b06-ce10-4651-8b9b-d5c3bb7249ad/" className="App-logo" alt="logo" />
        <div>
          <Products />
        </div>
      </header>
    </div>
  );
}

export default App;
