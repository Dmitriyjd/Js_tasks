function lorem(a, b, c, d) {
    return a + b + c + d;
}
Function.prototype.carry = function(){ var that = this;return function () {
    if (that.length > arguments.length) {
        return Function.prototype.carry(that.bind(undefined, ...arguments));
    } else {
        return that(...arguments);
    }
}};


Function.prototype.sayHello = function(){console.log("hello world")};

var megaSumm = lorem.carry();

console.log(megaSumm("a")("b","c")("d", "e", "f"));