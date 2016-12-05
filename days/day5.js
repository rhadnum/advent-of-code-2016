
var crypto = require('crypto');
var md5 = require('md5');

var input = 'ffykfhsq';

function findPassword(input) {
  var found = 0;
  var password = '--------'.split('');
  var index = 0;

  while(found < 8){
    var hash = crypto.createHash('md5').update(input + index).digest('hex');
    if(hash.substring(0,5) === '00000'){
      var pos = +hash[5];

      if(pos >= 0 && pos < 8 && password[pos] === '-'){
        password[pos] = hash[6];
        found++;
      }
    }
    index += 1;
  }
  return password.join('');
};

console.log(findPassword(input));