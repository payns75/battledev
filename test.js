function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseKGroup = function (head, k) {
    if (k === 0) {
        return head;
    }

    k--;

    var g = recur(null, head, 0, k)

    // var item = g;
    // a=1;
    // while(a>0){
    //     a--
    //     var h = recur(null, item.l.next, 0, k)
    //     item.l.s = h.s
    //     item = h.l.s
    // }

    //var h = recur(null, g.l.next, 0, k)
    //g.l.next = h.s
    //var i = recur(null, h.l, 0, k)
    // h.l.next = i.s
    // var j = recur(null, i.l.next, 0, k)
    // console.log(readlist(g.s))

    //console.log(readlist(head))
    doit(g, k);
    console.log(readlist(g.s))
};

function doit(m, k) {
    var h = recur(null, m.l.next, 0, k)

    if (h) {
        m.l.next = h.s;
        doit(h, k)
        console.log(readlist(h.s));
        console.log(readlist(h.l));
    }
}

function recur(a, b, c, k) {
    var n = null;
    var s = b;
    var f = (p, l, i) => {
        if (l && l.next) {
            f(l, l.next, i + 1)
        }

        if (!l)
            return

        if (i > k) {
            n = l
        }  if (i === k && n) {
            s = l
            l.next = p
        } else if (i == 0) {
            //if(n)
            if(n){
                //n=l
                l.next = n
            }


           
            //console.log(readlist(s))
            //console.log(readlist(l))
            //f(null, n.next, k)
            return { s, l }
            //return l
        } else if (i < k && n) {
            l.next = p
            if(!n){
                //n=l
                //n.next=null
            }
                
        }
    }



    var r = f(a, b, c)

    return r;
}

function readlist(list) {
    var result = []

    var f = (l) => {
        if (l.val)
            result.push(l.val)

        if (l.next)
            f(l.next)
    }

    f(list)

    return result
}

function initlist(vals) {
    var r = new ListNode(vals[0]);

    var f = (i, v) => {
        if (i < vals.length - 1) {
            v.next = new ListNode(vals[++i])
            f(i, v.next)
        }
    }

    f(0, r)

    return r;
}

var u = initlist([1, 2, 3,4])
reverseKGroup(u, 4)

// var un = u
// var deux = u.next
// var trois = u.next.next
// var quatre = u.next.next.next
// var cinq = u.next.next.next.next


// trois.next=deux
// deux.next=un
// un.next=quatre

// console.log(readlist(trois))

