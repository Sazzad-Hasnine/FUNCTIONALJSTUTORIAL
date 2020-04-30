function sayName(name) {
    return 'Hello, ' + name;
}

var hello = sayName;
// var fun = sayName('HM Nayem');

// console.log(hello);
// console.log(fun);

// console.log(hello('HM Nayem'));

var anotherHello = hello;

console.log(anotherHello('HM Nayem'));

var arr = [1, 2, 3, anotherHello];
arr.push(sayName)
console.log(arr); 

var person = {
    name: 'HM Nayem',
    sayName: hello,
    print: function() {
        console.log('Hi');
        
    }
}

console.log(person);

var sum = 10 + (function(){return 50})();
sum;

function wow(name, fun) {
    return fun(name);
}

var result = wow('HM Nayem', sayName);
console.log(result);

function base(b) {
    return function(n) {
        var result = 1;

        for (var i=0; i<b; i++) {
            result *= n;
        }
        return result;
    }
}

// var power = base(2);
// var result = power(10);

var result = base(3)(5)
result;

