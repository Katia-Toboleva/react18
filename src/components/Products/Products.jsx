import React, { useEffect, useState } from "react";
import ProductList from "../ProductList/ProductList";
import Filter from '../Filter/Filter';
import './Products.css';
import { generateProducts, filterProducts } from '../../utilities';

const mockProducts = generateProducts(5);

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
    <>
      <Filter onChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </>
  )
};

export default Products;