
var fs = require('fs');
var input = [];
var nbresto = 0;

// 1669
fs.readFile('./input.txt', 'utf8', (err, value) => {
    value.split('\n').map(m => input.push(m));
    ContestResponse();
})

function ContestResponse() {
    var prxparpersonne = parseInt(input[0]);
    var nbtables = +input[1];

    var r = input.splice(2)
        .map(m=> prxparpersonne*parseInt(m) - prxparpersonne*parseInt(m)*reduction(parseInt(m))/100)
        .reduce((a, b) => a + b);
        console.log(Math.ceil(r));
}

function reduction(nbpersonnes){
    if(nbpersonnes >= 10){
        return 30;
    } else if(nbpersonnes >= 6) {
        return 20;
    } else if(nbpersonnes >= 4){
        return 10;
    }

    return 0;
}