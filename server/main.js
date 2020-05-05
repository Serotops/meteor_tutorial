import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  //obj.printName();
  // class Person { 
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     return  `Hi! I am  ${this.name}.`;
  //   }

  //   getPersonDescription() {
  //     return `Hi! I am ${this.name} and i'm ${this.age}`;
  //   }
  // }

  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting() {
  //     if (this.title) {
  //       return `Hi! I am ${this.name}. I work as a ${this.title}`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }

  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting() {
  //     return `Hi! I am ${this.name}. I am a ${this.preferredLanguage} developper.`;
  //   }
  // }

  // let dev = new Programmer();
  // console.log(dev.getGreeting());

  // let me = new Employee('Bilel', 21, 'db admin');
  // console.log(me.getPersonDescription());
  // console.log(me.getGreeting());

  // let person = new Employee('Andrew', 25);
  // console.log(person.getPersonDescription());
  // console.log(person.getGreeting());

  // Players.insert({
  //   name: 'Vikram',
  //   score: 99
  // });
  // console.log(Players.find().fetch());

  // let square = function (x) {
  //   return x * x;
  // }; 

  // let square = (x) => x * x;

  // console.log(square(10));

  // let user = {
  //   name: 'Andrew',
  //   sayHi () {
  //     setTimeout(() => {
  //       console.log(this.name);
  //     }, 1000);
  //   }   
  // }

  // user.sayHi(1, 2);

  // let numbers = [9, 99, 4, 56]; 
  // let newNumbers = numbers.map((number) => number + 1 );
  // console.log(newNumbers);

});
