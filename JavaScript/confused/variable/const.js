function printManyTimes(str) {
  'use strict';
  
  const SENTENCE = str + 'is cool!'; //재할당불가능, 보통 대문자로 작성
  
  sentence = str + 'is amazing!' //error 발생
  
  for(let i = 0; i < str.length; i+=2) { //let과 const 같이 사용하는게 좋다.
    console.log(sentence);
  }
}
