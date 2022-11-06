import { faker } from '@faker-js/faker';

const generateProducts = (number) => {
  return (
    Array.from({ length: number }).map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
    }))
  );
};

export default generateProducts;