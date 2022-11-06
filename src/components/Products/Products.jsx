import React, { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import './Products.css';
import { generateProducts, filterProducts } from '../../utilities';

const mockProducts = generateProducts(50000);

const Products = ({ products = mockProducts }) => {
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newProducts = filterProducts(products, filter);
    setFilteredProducts(newProducts);
  }, [filter])

  
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input className="filter" onChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  )
};

export default Products;