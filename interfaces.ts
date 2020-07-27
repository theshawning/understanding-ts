// alternative to custom function type, though less common usage of it
interface AddFn {
  (a: number, b: number): number;
}

let addNum: AddFn;

addNum = (n1: number, n2: number) => {
  return n1 + n2;
}

// break

interface Named {
  readonly name?: string;
  outputName?: string;
  // the ? specifies that the property is optional
}

// use this functionality if you need some objects to have different sets of functionality
interface Greetable extends Named {
  greet(phrase: string): void;
}

// break

class Person implements Greetable {
  name?: string;
  age = 34;

  constructor(n?: string) {
    if (n) {
      this.name = n
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ', I\'m ' + this.name)
    } else {
      console.log('Hi!')
    }
  }
}

let user1: Greetable;
let user2: Greetable;

user1 = new Person('Shawn')
user2 = new Person();

user1.greet('Hello');