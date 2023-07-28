class Dog {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}

let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");

bigFluffyDog1; // => Dog { name: 'Buzz', breed: 'greatPyrenees' }
bigFluffyDog2; // => Dog { name: 'Woody', breed: 'labrador' }



class Breakfast {
    constructor(food, drink) {
        this.food = food
        this.drink = drink

    }
}

class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}

class Dinner {
    #dessert
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert
    }
}




























// const redFish = new Fish('Red', 3)
// const blueFish = new Fish('Blue', 1)


// //Accessing Instance Properties
// //If we've assigned an instance to a variable, we can access properties using the variable object:
// const oldFish = new Fish('George', 19)
// const newFish = new Fish('Clyde', 1)

// oldFish.name; //=> 'George'
// oldFish.age; //=> 19
// newFish.name; //=> 'Clyde'
// newFish.age; //=> 1

// //referring to sayName().. By using this.name and this.age to define properties in our constructor, we can also refer to these properties within other methods of our class:

// //This allows us to return dynamic information based on the unique properties we assigned back when an instance was created. Another example:
// ///////////////////////////////////
// class Square {
//     constructor(sideLength) {
//       this.sideLength = sideLength;
//     }
  
//     area() {
//       return this.sideLength * this.sideLength;
//     }
//   }
  
//   const square = new Square(5);
//   square; // => Square { sideLength: 5 }
//   square.sideLength; // => 5
//   square.area(); // => 25



//   //Private Properties
//   //Private elements declared using the # syntax cannot be accessed or changed from outside the class:
//   class Transaction {
//     // declare private fields
//     #amount;
//     #date;
//     #memo;
//     constructor(amount, date, memo) {
//       // assign values to private fields
//       this.#amount = amount;
//       this.#date = date;
//       this.#memo = memo;
//     }
//   }

// const transaction = new Transaction(100.24, "03/04/2018", "Grocery Shopping");
// transaction.amount;
// // => undefined
// transaction.#amount;
// // => SyntaxError

// /*Conclusion
// So, to recap, we can define a class simply by writing class, 
// a name, and a set of curly brackets. We can then use this class 
// to create unique instances. These instances can contain their 
// own data, which we typically set using constructor, passing in 
// arguments and assigning them to properties we've defined. With 
// these properties, class instances can carry data around with them 
// wherever they go. While there are no private properties (yet), it is 
// possible to set up classes to emphasize using methods over directly 
// changing properties.
// */