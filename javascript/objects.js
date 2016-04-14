//====================================
function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function() {
        console.log("Hello!")
    }
    
}

var user = new Person("Codecademy Student",false);
user.speak();

//=====================================
var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a " + this.job) 
        
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();


//====================================

// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj  ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"

//==========================================

var myObj = {
    name: "azerty"
};
console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false

//========================================

var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts')) {
    console.log(true);
}
else {
    suitcase.shorts = "green";
}
//=======================================
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc) {
  console.log(property);
}

// write a for-in loop to print the value of nyc's properties
for(var property in nyc) {
  console.log(nyc[property]);

//==============================================
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
  console.log("Woof");
};
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();

//============================================

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function() {
  console.log("Meow!");
};


// add code here to make the cats meow!
var grisou = new Cat("Gris");
/// this time it works!
grisou.meow();
}

//============================================
// create your Animal class here
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}

// create the sayName method for Animal
Animal.prototype.sayName =function () {
    console.log("Hi my name is " + this.name)
}

// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();


//=============================================

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

var penguin = new Penguin;

penguin.sayName();

//=======================================
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin
function Emperor(name) {
    this.name = name;
}

// create an "emperor" object and print the number of legs it has
Emperor.prototype = new Penguin();

emperor = new Emperor("pingou")

console.log(emperor.numLegs)

//==========================================

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      return bankBalance;
      
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance();
console.log(myBalance)


//==============================================
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
       return returnBalance;
   }
   
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);

//==============================================
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
var myBalance = john.askTeller(1234);



//================================================
function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello
Dog.prototype.sayHello = function() {
    console.log("Hello this is a " + this.breed + " dog");
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();


//==================================================

// what is this "Object.prototype" anyway...?
var prototypeType = typeof Object.prototype
console.log(prototypeType);

// now let's examine it!
var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty')
console.log(hasOwn);


//===================================================
var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98)
cashRegister.add(1.23)
cashRegister.add(4.99)
cashRegister.add(0.45)

//Show the total bill
console.log('Your bill is '+cashRegister.total);

//================================================


