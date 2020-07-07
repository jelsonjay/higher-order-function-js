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

function favCar(car) {
	document.getElementById('app').innerHTML =
		'All are a good car ' + car + ' very cool!';

	console.log(car);
}
