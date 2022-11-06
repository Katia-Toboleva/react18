import React from 'react';
import './ProductList.css';

const ProductList = ({ products = [] }) => {
  return (
  <div className="products-container">
    {products.map((product) => (
      <div className="product" key={product.id}>
        {product.name}
      </div>
    ))}
  </div>
  );
};

export default ProductList;