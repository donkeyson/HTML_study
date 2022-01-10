//매개변수(parameter)
function addNum(x, y, z) { //x, y, z가 매개변수
  return x + y + z;
}
addNum(1, 2, 3); //인수로 1, 2, 3을 전달해서 함수를 호출
addNum(1, 2); //인수가 모자람 -> NaN

//인수가 전달되지 않아도 값 전달하기
function addNum(x, y, z) {
  if(x === undefined) // x가 정의되지 않으면 x의 값을 0으로 변경
    x = 0;
  if(y === undefined)
    y = 0;
  if(z === undefined)
    z = 0;
  return x + y + z;
}
addNum(1, 2, 3); //6
addNum(1, 2); //1 + 2 + 0 -> 3
