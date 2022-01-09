//함수
function addNum(x, y) {
  return x + y;
}
document.write(addNum(2, 3)); //5

function multiNum(x, y) {
  return x * y; //x와 y 곱한 값 반환
}
var num = multiNum(3, 4); //함수 호출 후, 반환 값 num에 저장
document.write(num);

//값으로서의 함수
function sqr(x) {
  return x * x;
}
var sqrNum = sqr; //변수에 함수를 대입
document.write(sqr(4) + '<br>'); //함수 sqr을 호출
document.write(sqrNum(4)); //변수 sqrNum을 함수처럼 호출: 16
