const pie = 3.14;
function sum(a,b) {
    return a+b;
}
function multiply(a,b) {
    return a*b;
}
module.exports={
    pie,
    sum,
    multiply
}

module.exports={
    pie:3.14,
    sum:(a,b)=>{return a+b},
    multiply:(a,b)=>{return a*b}
}

exports.sum= (a,b)=>{return a+b};
exports.multiply=(a,b)=>{return a*b};
exports.pie=3.14;