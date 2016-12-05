const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../data/day2.txt', 'utf8').split('\n');


function bathroomSecurity(input){
  let keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]

  let prev = [1, 1];
  return input
    .map(line => line.split('')
      .reduce((acc, v) => {
        let n = [acc[0], acc[1]];
        if (v === 'U') n[0] = acc[0] - 1;
        else if (v === 'D') n[0] = acc[0] + 1;
        else if (v === 'L') n[1] = acc[1] - 1;
        else if (v === 'R') n[1] = acc[1] + 1;
        if (!keypad[n[0]] || !keypad[n[0]][n[1]]) n = acc;
        prev = n;
        return n
      }, prev))
    .map(coords => keypad[coords[0]][coords[1]])
    .join``
}


console.log(bathroomSecurity(data));