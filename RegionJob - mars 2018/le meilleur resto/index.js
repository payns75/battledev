
var fs = require('fs');
var input = [];
var nbresto = 0;

// 12
fs.readFile('./input.txt', 'utf8', (err, value) => {
    value.split('\n').map(m => input.push(m));
    ContestResponse();
})

function ContestResponse() {
    nbresto = input[0];
    var r = input.splice(1).map(m => 
            m.split(' ').reduce((a, b) => parseInt(a) + parseInt(b))
    ).map(m=> Math.ceil(+m/3))
    .reduce((a,b) => a>b ? a : b);

    console.log(r);
}