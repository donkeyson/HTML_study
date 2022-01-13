function myLocalScope() {
  var myVar = 5; //local
  console.log(myVar);
}
myLocalScope();

console.log(myVar); //error
