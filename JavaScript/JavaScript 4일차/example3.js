//label문 continue나 break문을 사용할 때 tag로 사용 가능

//continue문과 label 활용 사례
gugudan: //gugudan label
for (var i = 2; i <= 9; i++) {
  dan: //dan label
  for (var j = 1; j <= 9; j++) {
    if (i*j) % 2 == 0)
      continue dan; //짝수인 경우 dan으로 돌아감
    document.write(i + '*' + j + ' = ' + (i*j) + '<br>'); //값이 홀수인 경우만 출력
  }
}

//break문 활용 사례
gugudan:
for (var i = 2; i < = 9; i++) {
  dan:
  for (var j = 1; j <= 9; j++) {
    if (i > 3)
      break gugudan; //3단까지만 출력하고 4단부터는 구구단을 break
    document.write(i + '*' + j + '=' + (i*j) + '<br>');
  }
}
