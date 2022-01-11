//객체에 프로퍼티 및 메소드 추가
function Dog(color, name, age) {
  this.color = color;
  this.name = name;
  this.age = age;
}
//Dog 프로토타입에 family 프로퍼티 추가
Dog.prototype.family = '시베리안 허스키';
//Dog 프로토타입에 breed 메소드 추가
Dog.prototype.breed = function() {
  return this.color + ' ' + this.family;
};
var myDog = new Dog('흰색', '마루', 1);
var hisDog = new Dog('갈색', '콩이', 3);
