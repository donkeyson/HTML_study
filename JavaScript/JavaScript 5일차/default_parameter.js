//디폴트 매개변수(default parameter)
function mul(a, b=1) { //인수가 한 개만 전달되면 나머지 매개변수 값을 1로 설정
  return a * b;
}

mul(3); //3
