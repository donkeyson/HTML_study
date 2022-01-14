const arr1 = ['JAN', 'FEB']
let arr2;
(function() {
  arr2 = [...arr1]; //new array. arr2 doesn't match arr1
  arr1[0] = 'potato'
})(); 
//arr2[0] -> 'JAN'
