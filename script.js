//#1
//Declare a variable called 'name' that has the value of your name.

/*code here*/
var name = 'Dan';

//#2
//create an if statement that checks to see if your name is equal to 'Ben'
//If yes, log 'yes'
//otherwise log 'no'
//note: use console.log to log the string

/*code here*/
if (name === 'Ben') {
  console.log('yes');
} 
else {
  console.log('no');
};
//#3
//create an array called 'favoriteFoods'.
//fill it up with the names of several of your favorite foods
/*code here*/
var favoriteFoods = ['tofu', 'grass', 'vegetables', 'steak'];
//#4
//use a for loop to log each food in the 'favoriteFoods' array

/*code here*/
for (var i = 0; i <= favoriteFoods.length; i++) {
  console.log(favoriteFoods[i]);
};
//#5
//create an object called 'favoriteMovie'.
//give 'favoriteMovie' a property called 'runtime' and set it equal to how long the movie is in minutes
//give 'favoriteMovie' a property called 'title' and set it equal to the title
//give 'favoriteMovie' a property called 'director' and set it equal to the director's name
/*code here*/
var favoriteMove = {
  runtime: '100 minutes',
  title: 'Willy Wonka and the Chocolate Factory',
  director: 'Mel Stuart'
}
//#6
//create a function called 'sayHi'.
//'sayHi' should accept one argument called 'name'
//when 'sayHi' is invoked it should log the string 'Hello <name>!' where <name> is equal to the 'name' argument

/*code here*/
function sayHi(name) {
  console.log('Hello ' + name + '!');
}
//#7
//create an array called 'friends'
//create three objects that have information about your friends
//each object should have a 'name', 'age', and 'vocation' property with appropriate data
//put the three objects inside of the 'friends' array

/*code here*/
var friends = [];

var friend1 = {
  name: 'Jim',
  age: 24,
  vocation: 'Da boss',
}

var friend2 = {
  name: 'Tim',
  age: 23,
  vocation: 'Sheet Metal',
}

var friend3 = {
  name: 'Mel',
  age: 24,
  vocation: 'Accounting',
}

friends.push(friend1, friend2, friend3);
//#8
//use a for loop to iterate over the 'friends' array from problem #7
//inside the for loop print the string 'My friend <name> is <age> years old and does <vocation> for work.'

/*code here*/
for (var i = 0; i <= friends.length; i++) {
  console.log('My friend ' + name + 'is ' + age + 'years old and does ' + vocation + 'for work');
}
//#9
//create a constructor called 'User' that can function as a class for creating new user objects
//'User' should take 'email', and 'password' as arguments 
//each instance of 'User' that is created should have a 'email', and 'password' property that is equal to the arguments passed to the constructor

/*code here*/

//#10
//create a function called 'nFactorial(num)'
//'nFactorial' should return the factorial of the 'num' argument
//note: the factorial of 5 is (5 * 4 * 3 * 2 * 1) ->  120
//try to solve this recursively

/*code here*/
