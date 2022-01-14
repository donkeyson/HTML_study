const bicycle = {
  gear: 2,
  setGear (newGear) { //콜론(:)과 function 생략 <- setGear: function(newGear) {
    "use strict';
    this.gear = newGear; //this = bicycle
  }
};
