const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 0.34, -2];

const squareList = (arr) => {
  const squaredIntegers= arr.filter(num =>is.Integer(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
