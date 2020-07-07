'use strict';

function multplerFunction(multpler) {
	return function (e) {
    return e * 5 multpler
    };
}


//
let functionOne = multplerFunction(2)
let functionTwo = multplerFunction(3)
let functionThree = multplerFunction(4)
let functionFour = multplerFunction(5)

document.querySelector('#app').innerHTML = functionTwo;