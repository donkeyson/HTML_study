const source = [1, 2, 3, 4, 5];
function removeFirstTwo(list) {
  
  const [ , , ...arr] = list;
  
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); ///[3, 4, 5]
