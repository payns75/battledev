var fs = require('fs');
var input = [];
var nbcrepe = 6;

fs.readFile('./input.txt', 'utf8', (err, value) => {
    value.split('\n').map(m => input.push(+m));
    ContestResponse();
})

//npx nodemon index.js
var retourne = (array, pos) => pos===0?array:array.slice(0, pos).reverse().concat(array.slice(pos));
var issorted = (array) => array.every((v, i, a)=> i===0?true:+v>+a[i-1]);
var minreturns=10;
var nbcrepe=6;

function ContestResponse(){
	if(!issorted(input)){
        recur(input, 0);
        console.log(minreturns);
    } else{
        console.log(0)
    }
}

function recur(values, counter){
    for(var i=2;i<=nbcrepe;i++){
        var v = retourne(values, i);
        if(issorted(v)){
            if(minreturns > counter+1){
                minreturns = counter+1;
            }
            break;
        } else{
            if(counter<minreturns){
                arguments.callee(v, counter+1);
            }   
        }
    }
}