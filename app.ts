interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 34;

  constructor(n: string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(phrase + ', I\'m ' + this.name)
  }
}

let user1: Greetable;

user1 = new Person('Shawn')

user1.greet('Hello');