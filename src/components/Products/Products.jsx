import React, { useEffect, useState, useTransition } from "react";
import ProductList from "../ProductList/ProductList";
import Filter from '../Filter/Filter';
import './Products.css';
import { generateProducts, filterProducts } from '../../utilities';

const mockProducts = generateProducts(15000);

const Products = ({ products = mockProducts }) => {
  const [filter, setFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const newProducts = filterProducts(products, filter);
    // lower priority event
    startTransition(() => {
      setFilteredProducts(newProducts);
    })
  }, [filter])

  
  const handleFilterChange = (e) => {
    // high priority event
    setFilter(e.target.value);
  };

  return (
    <>
      <Filter onChange={handleFilterChange} isPending={isPending}/>
      <ProductList products={filteredProducts} />
    </>
  )
};

export default Products;