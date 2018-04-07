function ListNode(val) {
    this.val = val;
    this.next = null;
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

var u = initlist([1, 2, 3, 4, 5])
console.log(u)
console.log(readlist(u))