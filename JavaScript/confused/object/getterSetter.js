
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }//_mean private
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp){
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}
  
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26; //setter
temp = thermos.temperature;
