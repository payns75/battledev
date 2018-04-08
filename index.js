function *mypermute(a, n = a.length) {
    if (n <= 1) yield a.slice();
    else for (let i = 0; i < n; i++) {
      yield *mypermute(a, n - 1);
      const j = n % 2 ? 0 : i;
      [a[n-1], a[j]] = [a[j], a[n-1]];
    }
  }
  
  var permute = function(nums) {
    var p = Array.from(mypermute(nums)).map(m=>m.join('.'))

    //console.log(p)

    return [...new Set(p)].map(m=> m.split('.').map(m=>+m))
};

  console.log(permute([-1,2,-1,2,1,-1,2,1]));
  