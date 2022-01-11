function Dog(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}
var myDog = new Dog('흰색', '마루', 1);

//color 프로퍼티의 enumerable 속성을 false로 설정
Object.defineProperty(myDog, 'color', {enumerable: false});
//객체가 가진 고유 프로퍼티 중에서 열거할 수 있는 프로퍼티 이름을 배열에 담아 반환
document.write(Object.keys(myDog)); //name, age
//객체가 가진 모든 고유 프로퍼티 이름을 배열에 담아 반환
document.write(Object.getOwnPropertyNames(myDog)); //color, name, age

//객체 간 비교
var myDog = new Dog('흰색', '마루', 1);
var hisDog = new Dog('흰색', '마루', 1); //프로퍼티 값이 같은 객체를 생성

document.write(myDog == hisDog); //false
document.write(myDog === hisDog); //false

var herDog = hisDog; //hisDog 객체를 변수 herDog에 대입. 객체 레퍼런스(object reference)
document.write(hisDog == herDog); //true
document.write(hisDOg === herDog); //true
