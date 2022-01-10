//나머지 매개변수(rest parameter)
function sub() {
  var firstNum = arguments[0]; //첫번째 인수
  for(var i = 0; i < arguments.length-1; i++) { //두 번째부터 마지막 인수까지
    firstNum -= arguments[i+1]; //빼기
  }
  return firstNum;
}

sub(10, 2, 3); //10 - 2 - 3 = 5
