const increment = (function() {
  return function increment(number, value = 1) { //입력되지 않으면 value = 1
    return number + value;
  };
})();
