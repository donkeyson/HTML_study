function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  
  Object.freeze(MATH_CONSTANTS) //오브젝트 고정
  
  try {
    MATH_CONSTANTS.PI = 99; //error 발생
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
