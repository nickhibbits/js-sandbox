// Currying

/**
 *
 * @param {number} discount the discount percentage as a whole number.
 * To apply a 10% discount pass 10.
 * @returns a function which accepts the price to discount as an argument and returns the final discounted price
 */

const applyDiscount = (discount) => (price) => {
  return price - (price * discount) / 100;
};

const tenPercentOff = applyDiscount(10);
const twentyPercentOff = applyDiscount(20);

console.log(tenPercentOff(100));
console.log(twentyPercentOff(100));
