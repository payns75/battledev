var nbmeschaton = 4
var meschatons = 'FEPP'
var nbchatonadversaire = 5
var adversaire = 'FPFFE'

var combat = (adv, moi) => {
    if (adv === moi) return 0;
    if (moi === 'F' && adv === 'E') return -1;
    if (moi === 'E' && adv === 'F') return 1;
    if (moi === 'F' && adv === 'P') return 1;
    if (moi === 'P' && adv === 'F') return -1;
    if (moi === 'P' && adv === 'E') return 1;
    if (moi === 'E' && adv === 'P') return -1
}

function ContestResponse() {
    console.log(Array.from(permute(meschatons.split(''))).map(perm => perm.join('')));

//     var count=0;
// while((t.next(), !t.done)){
//     console.log(t.value)
// }

    
    for (var i = 0; adv = adversaire[i]; i++) {
        for (j = 0; moi = meschatons[j]; j++) {
            //console.log(adv, moi, combat(adv, moi))
        }
    }
}

function jeux(advs, mes) {

}

function* permute(a, n = a.length) {
    if (n <= 1) yield a.slice();
    else for (let i = 0; i < n; i++) {
      yield *permute(a, n - 1);
      const j = n % 2 ? 0 : i;
      [a[n-1], a[j]] = [a[j], a[n-1]];
    }
  }

ContestResponse()