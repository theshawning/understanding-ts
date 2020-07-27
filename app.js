var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 34;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ', I\'m ' + this.name);
    };
    return Person;
}());
var user1;
user1 = new Person('Shawn');
user1.greet('Hello');
