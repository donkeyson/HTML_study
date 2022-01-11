//객체의 예시
var cat = '나비'; // 변수 선언
var kitty = {name: '나비', family: '코리안 숏 헤어', age: 1, weight. 0.1};
cat //나비
kitty.name //나비

//객체의 예시2
var person = {
  name: '홀길동', //이름 프로퍼티
  birthday: '030219', //생년월일 프로퍼티
  id: '1234567', //개인 id 프로퍼티
  fullid: function() { //생년월일과 개인 id 합치기
    return this.birthday + this.id;
  }
}; //세미콜론 붙여줘야함

person.name //홍길동
person['name'] //홍길동

//객체의 메소드 참조 메소드 이름 뒤에 괄호() 붙여줘야함.
person.fullid() //030219124567 
person.fullid; //function() {return this.birthday + this.pid;}
