var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5) //먼저 괄호 내용을 수행 하고 조건을 체크 

console.log(i, myArray); //11, [10]
