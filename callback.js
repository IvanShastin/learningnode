var fib = function (n) {
    if (n<2) return n;
    return fib(n-1) + fib(n-2);
}

var Obj = function(){};

Obj.prototype.doSometing = function(arg1_) {
    callback_ = arguments[arguments.length -1];
    callback = (typeof(callback_) == 'function' ? callback_: null);

    var arg1 = typeof(arg1_) == 'number' ? arg1_ : null;

    if(!arg1) return callback(new Error('first argument is missing out or not a number'));

    process.nextTick(function(){
        var data = fib(arg1);
        callback(null, data);
    });
}

var test = new Obj();

var num = 10

test.doSometing(num, function(err, value) {
    if(err) {
        console.log(err)
    } else {
        console.log('fibonaci value for %d is %d', num, value);
    }

})

console.log('called something');