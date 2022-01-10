//arguments 객체
//배열과 비슷하지만 배열은 아니다.

function addNum() {
  var sum = 0; //합을 저장할 변수
  for(var i = 0; i < arguments.length; i++) { //전달받은 인수의 총 수만큼 반복
    sum += argument[i]; //전달받은 각각의 인수를 sum에 더하기
  }
  return sum;
}
addNum(1, 2, 3); //6
addNum(1,2); //3
addNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //55
