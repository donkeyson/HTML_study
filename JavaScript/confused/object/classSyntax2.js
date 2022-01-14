function makeClass() {
  class Vegetable {
    constructor (name) {
      this.name = name; //this.name과 매개변수 name은 다르다.
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); //carrot
