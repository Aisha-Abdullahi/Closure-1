function printName() {
    var helloname = "Hello John";


    function inner() {
        return helloname;
    }

    return inner;
}

var greeting = printName();
console.log(greeting());



