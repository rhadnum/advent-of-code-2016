const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../data/day1.txt', 'utf8').split(',');
let direction = 0;//0 - N, 1 - E, 2 - S, 3 - W
let position = [0, 0];//x & y

function move(txt){
  if(txt[0] == 'R'){
    direction++;
  }else{
    direction--;
  }
  if(direction < 0){
    direction += 4;
  }

  direction = direction % 4; //keep in range of the directions.

  txt = +txt.slice(1); //convert to number

  if(direction >= 2){ //if direction is south or west, then de
    txt *= -1;
  }

  position[(direction + 1) % 2] += txt; //adds the distance of the input to
  //the position
}

function calcBlockDistance() {
  for (let i = 0; i < data.length; i++) {
    move(data[i]);
  }
}

console.log(Math.abs(position[0]) + Math.abs(position[1]));

module.exports = {
  calcBlockDistance
}