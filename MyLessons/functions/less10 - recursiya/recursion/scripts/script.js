function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

// console.log(pow(2, 3));



function pow2(x,n) {
    let res = 1;

    for (let i = 0; i <  n; i++) {
        res = res * x;
    }
    return res;
}

console.log(pow2(2,3));