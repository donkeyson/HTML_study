let catName = 'Quincy';

catName = 'Beau' //no error

let catName = 'Beau'; //error

function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is:', i); //block scope
  }
  console.log('Function scope i is:' i); //function scope
  return i;
}
