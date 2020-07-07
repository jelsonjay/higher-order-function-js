'use strict';

function multplerFunction(multpler) {
	return function (e) {
		return e * multpler;
	};
}

//  assign function to variable
let functionOne = multplerFunction(25);
let functionTwo = multplerFunction(53);
let functionThree = multplerFunction(4);
let functionFour = multplerFunction(5);
let functionFive = multplerFunction(4);
let functionSix = multplerFunction(5);

//document.querySelector('#app').innerHTML = functionTwo(10);

//Higher order function, javascript itself

let myCars = ['Audi', 'Mercedes Bens', 'Ferrari'];

// forEach is a higher order function of javascript languge itself
myCars.forEach(favCar);

function favCar(p) {
	document.querySelector(
		'#app'
	).innerHTML = `All are good, but I love ${p} is very cool car!`;

	console.log(p);
}
