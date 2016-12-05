const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../data/day3.txt', 'utf8')
  .trim()
  .split('\n')
  .map(function (line) {
    return line.trim().split(/\s+/).map(side => +side)
  });


function calcNumOfTriangles(triangles) {
  var numOfTriangles = 0;

  triangles.forEach(function (tri) {
    if((tri[0] + tri[1] > tri[2]) && (tri[1] + tri[2] > tri[0]) && tri[0] + tri[2] > tri[1]){
      numOfTriangles++;
    }
  });
    return numOfTriangles;
  }

function getColumns(tris) {
  const newArr = [];
  for (let i = 0; i < tris.length; i+=3) {
    for(var j = 0; j < 3; j++) {
      newArr.push([tris[i][j], tris[i + 1][j], tris[i + 2][j]])
    }
  }
  return newArr;
}

console.log(getColumns(data));


module.exports = calcNumOfTriangles;