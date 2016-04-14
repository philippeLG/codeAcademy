for(var i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } 
    else if (i % 5 === 0) {
            console.log("Buzz")
        }
    else if (i % 3 === 0) {
            console.log("Fizz")
        }
    else {
        console.log(i)
    }   
}

// ============================================
var getReview = function (movie) {
    switch (movie){
        case "Toy Story 2":
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            return "Great songs.";
            break;
        default:
            return "I don't know!";
    }
};

// ============================================
# Object
var bob = {
  name: "Bob Smith",
  age: 30
};
var susan = {
  name: "Susan Jordan",
  age: 25
};
// here we save Bob's information
var name1 = bob.name;
var age1 = bob.age;
// finish this code by saving Susan's information
var name2 = susan.name;
var age2 = susan.age;


// ============================================
// Take a look at our next example object, a dog
var dog = {
  species: "greyhound",
  weight: 60,
  age: 4
};

var species = dog["species"];
// fill in the code to save the weight and age using bracket notation
var weight = dog["weight"]
var age = dog["age"]


// ============================================
// Our bob object again, but made using a constructor this time 
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();
susan2.name = "Susan Jordan";
susan2.age = 24;


// ============================================
//
var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) {
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth) {
    this.width = newWidth;
}
  

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6)
rectangle.setWidth(8)

// ============================================
//
var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function() {
    return this.sideLength * this.sideLength;
}
    

var p = square.calcPerimeter();
var a = square.calcArea();

// =========================================================
// Our Person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}


// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy",6);


// loop through our new array
for(var i = 0; i < family.length; i++) {
    console.log(family[i].name)
}

//============================
// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320,"J.R.R. Tolkien");


//==========================================
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function() {
        return Math.PI * this.radius * 2 
    }
};
