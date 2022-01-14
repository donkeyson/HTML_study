function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push('<li class='text-warning'>${arr[i]}<\li>')
  }
  
  return resultDisplayArray;
}
