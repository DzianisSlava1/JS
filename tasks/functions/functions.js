/**
 * write function that adds two numbers
 *
 */
function add(a, b) {
	return (a, b);
}

/**
 * write function that returns first and last name of given object
 * properties firstName and lastName
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 * }
 */
function getFullName(object)
let fullName = object.firstName + object.lastName;
return fullName;


/**
 * write function that checks is number is odd
 * true if odd, false if even
 */
function isOdd(n) {
	if (n == 0)
		return function (false);
}
if (n !== 0) {
	return function (true);
}

/**
 * write function that returns shortest of words in given array
 * e.g ["one", "two", "three"] should return one
 */

function findShortestWord(str) {
	let words = [one, two, three];
}
for (i = 0; i < words.length; i++) {
	let length = words[i].length;
	let min = Math.min(...words.map(({
		length
	}) => length));
	return min;
}


/**
 * write function that returns word google with given numbers of "o" symbols
 * e.g getGoogle(5) should return "gooooogle"
 */

let letter = o;

function getGoogle(n) {
	console.log(letter.repeat(3)); //gooogle


}

/**
 * write function that returns object based on given information (params may be null)
 * getUser("John", "Dou", 42) should return
 * {
 *    firstName: "John"
 *    lastName: "Dou"
 *    age: 42
 * }
 */

let firstName = John;
let lastName = Dou;
let age = 42;

function getUser(firstName, lastName, age) {

	return (firstName + lastName + age);
}

/**
 * write function that calculates total path traveled.
 * path represended as array of objects with field distance and direction
 * e.g [{direction: "Kiyv - Minsk", distance: 567}, {direction: "Kiyv - Paris", distance: 2402}]
 */

const MinskPiter = 800;
const MinskParis = 3000;

function getTotalPath(path) {
	return (MinskPiter + MinskParis);

}

console.log(calc(800, 3000));


/**
 * write a function that will calculate a discount considering the Amount
 * and the percentage (hint: you need to use the Closure here)
 * @param {amount} num 
 * @param {percentage} num 
 */

function discountFunction(amount) {

}

/**
 * Write the methods inside the given objects that:
 * 1. console logs keys of the given object
 * 2. returns the string 'My name is John Doe and I am 25 years old. My best friend is Daniel'
 * reffering to the data stored in the object
 */

const myObject = {
	name: 'John',
	lastName: 'Doe',
	age: 25,
	friends: ['Mike', 'Alan', 'Daniel'],
	keys() {
		console.log(myObject.name);
		console.log(myObject.lastNmane);
		console.log(myObject.age);
		console.log(myObject.friedns); 
	},
	showMessage('My name is John Doe and I am 25 years old. My best friend is Daniel');
	{
		function showMessage(text);
		console.log(myObject);
	
		
	}

};

module.exports = {
	add,
	getFullName,
	isOdd,
	getShortest,
	getGoogle,
	getUser,
	getTotalPath,
	discountFunction,
	myObject
};