const filterProducts = (products, value) => {
  if (!value) {
    return products;
  }

  return products.filter((product) => {
    return (product.name).toLowerCase().includes(value)
  });
};

export default filterProducts;