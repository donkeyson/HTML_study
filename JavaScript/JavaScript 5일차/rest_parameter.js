//나머지 매개변수(rest parameter)
function sub(firstNum, ...restArgs) { //첫 번째 인수만 firstNum으로 따로 저장, 나머지는 restArgs로 저장
  for(var i = 0; i < restArgs.length; i++) { //두 번째부터 마지막 인수까지
    firstNum -= restArgs[i]; //빼기
  }
  return firstNum;
}

sub(10, 2, 3); //10 - 2 - 3 = 5
