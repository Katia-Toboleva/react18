const filterProducts = (products, value) => {
  if (!value) {
    return products;
  }

  return products.filter((product) => {
    console.log(product.name)
    return (product.name).toLowerCase().includes(value)
  });
};

export default filterProducts;