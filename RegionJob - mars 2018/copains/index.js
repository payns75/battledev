
var fs = require('fs');
var input = [];

// 2
fs.readFile('./input.txt', 'utf8', (err, value) => {
    value.split('\n').map(m => input.push(m));
    ContestResponse();
})

function ContestResponse() {
    var mesnotes = input[0].split(' ').map(m => parseInt(m));
    var nbcpains = parseInt(input[1]);
    var nbmeilleurscopains = parseInt(input[2]);

    var r = input.splice(3).map(m => ({
        ecarts: m.split(' ')
            .map(s => parseInt(s)).map((n, i) => Math.abs(mesnotes[i] - n))
            .filter(f=> f)
            .reduce((a,b) => a+b),
        sanote: parseInt(m.split(' ')[5])
    })
    ).sort((a,b) => a.ecarts < b.ecarts ? -1 : 1)
    .slice(0, nbmeilleurscopains)
    .map(m=> m.sanote)
    .reduce((a, b) => a + b);

    console.log(Math.floor(r/nbmeilleurscopains));
}
