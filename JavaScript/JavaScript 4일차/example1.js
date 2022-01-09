//if 문
var x = 10, y = 20;
if (x == y) {
  document.write('x와 y는 같습니다.');
}
if (x < y) {
  document.write('x가 y보다 작습니다.');
}
if (x > y) //실행될 실행문이 한 줄뿐이라면 중괄호 생략 가능
  document.write('x가 y보다 큽니다.');

//else 활용
var x = 10, y = 20;
if (x == y) {
  document.write('x와 y는 같습니다.');
} else {
  if (x < y)
    document.write('x가 y보다 작습니다.');
  else // 실행될 실행문이 한 줄뿐이라면 중괄호 생략 가능
    document.write('x가 y보다 큽니다.');
}

//else if활용
var x = 10, y = 20;
if (x == y) {
  document.write('x와 y는 같다.');
} else if (x < y) {
  document.write('x가 y보다 작다.');
} else { //x > y인 경우
  document.write('x가 y보다 큽니다.');
}

//switch문 활용, 가독성이 더 좋다.
var x = 10;
switch (typeof x) {
  case 'number':
    document.write('변수 x의 타입은 숫자입니다.');
    break;
  case 'string':
    document.write('변수 x의 타입은 문자열입니다.');
    break;
  case 'object':
    document.write('변수 x의 타입은 객체입니다.');
    break;
  default:
    document.write('변수 x의 타입을 모르겠다.');
    break;
}
