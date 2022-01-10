//함수의 유효 범위(function scope)
var x = 10, y = 20; //전역 변수 선언
function sub() { //전역 함수 선언
  return x - y; //전역 변수인 x, y에 접근
}
document.write(sub() + '<br>');

function parentFunc() {
  var x = 1, y = 2; //전역 변수와 같은 이름으로 선언. 전역 변수의 범위를 제한
  function add() { //내부 함수 add 선언
    return x + y; //지역 변수 x, y에 접근
  }
  return add();
}
document.write(parentFunc());

//함수 호이스팅(hoisting)
var globalNum = 10; //전역 변수 
function printNum() {
  var globalNum; //함수 호이스팅
  document.write(globalNum); //10
  var globalNum = 20; //지역 변수로 선언
  document.write(globalNum); //값 바뀜
}
printNum();
