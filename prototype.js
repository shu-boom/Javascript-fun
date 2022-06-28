
/*
Prototype properties can be inheritied. No circular references are allowed and an object can inherit from a single object. Prototype can be an object or null. 
*/

// simple objects 
const Creature = {
	alive: true
}

const Human = {
	limbs: 2
}

Object.setPrototypeOf(Human, Creature);

console.log(Human); // {limbs: 2}
console.log(Creature); //{alive: true, [[Prototype]]: Object}
console.log(Human.limbs); // 2
console.log(Human.alive); // true
console.log(Human.__proto__ === Creature)

// Objects with getter and setters 

const Creature2 = {
	alive: true,
  eats: true,
  get Alive() {
        return this.alive;
  },
  set Alive(alive) {
        this.alive = alive;
  }
}

const Human2 = {
}

Object.setPrototypeOf(Human2, Creature2);

console.log(Human2); //{}
console.log(Creature2); //{alive: true, eats: true}

console.log(Human2.alive); // true
console.log(Creature2.alive); // true
Human2.Alive = false;

console.log(Human2.alive); // false
console.log(Creature2.alive); // true
console.log(Human2.Alive); // false

console.log(Human2.eats); // true
console.log(Creature2.eats); // true


// Object Constructors & classes
function V8() {
	this.cylinders = 8;
  this.boujee = true;
}
// prototype is a bucket of methods that can be inherited 
V8.prototype.version = function() {
	console.log(this.cylinders); // 8
	return "2022";
}

const mercedes = new V8();

console.log(mercedes.cylinders); // 8
console.log(mercedes.boujee); // true
console.log(mercedes.version); //function() { console.log(this.cylinders); return "2022"}
console.log(mercedes.version()); // 2022
console.log(mercedes.__proto__ == V8.prototype); // true


