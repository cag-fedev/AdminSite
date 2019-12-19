function helloWorld() {
	console.log( 'Hello World!');

	return '-';
}

/* ================================================================= */
/* ====== (JS IS DYNAMICALLY TYPED) ================================ */
/* ================================================================= */


/* ====== VARIABILI E TIPI DI VARIABILI ============================ */

function f01() {
	let x = 4;
	console.log( 'The value of variable x is: ' + x);
	console.log( 'The type  of variable x is: ' + typeof x);

	let y = 'T E S T';
	console.log( 'The value of variable y is: ' + y);
	console.log( 'The type  of variable y is: ' + typeof y);

	let z = true;
	console.log( 'The value of variable z is: ' + z);
	console.log( 'The type  of variable z is: ' + typeof z);

	return '-';
}

function f02() {
	let x;
	console.log( 'The value of variable x is: ' + x);
	console.log( 'The type  of variable x is: ' + typeof x);

	return '-';
}

function f03() {
	let x = 1/0;
	console.log( 'The value of variable x is: ' + x);
	console.log( 'The type  of variable x is: ' + typeof x);

	return '-';
}

function f04() {
	let x = Math.sqrt(-1);
	console.log( 'The value of variable x is: ' + x);
	console.log( 'The type  of variable x is: ' + typeof x);

	return '-';
}

function f05() {
	let x = [10, 15, 40];
	console.log( 'The value of variable x[1] is: ' + x[0]);
	console.log( 'The type  of variable x[1] is: ' + typeof x[0]);
	console.log( 'The value of variable x[2] is: ' + x[1]);
	console.log( 'The type  of variable x[2] is: ' + typeof x[1]);
	console.log( 'The value of variable x[3] is: ' + x[3]);
	console.log( 'The type  of variable x[3] is: ' + typeof x[3]);

	// ATTENZIONE
	console.log( 'The type  of variable x is: ' + typeof x);

	return '-';
}

function f06() {
	let x = function() { let a = 2; };
	console.log( 'The value of variable x is: ' + x);
	console.log( 'The type  of variable x is: ' + typeof x);

	return '-';
}
/*
	typeof possible results:
		number
		string
		boolean
		undefined
		object
		function
*/

/* ====== DYNAMIC CHANGE OF TYPE =================================== */

function f07() {
	let x = 4;
	console.log( 'The type  of variable x is: ' + typeof x);

	x = 'T E S T';
	console.log( 'The type  of variable x is: ' + typeof x);

	x = true;
	console.log( 'The type  of variable x is: ' + typeof x);

	return '-';
}


/* ================================================================= */
/* ====== CONSTANTS ================================================ */
/* ================================================================= */

function f08() {
	const x = 4;
	console.log( 'The value of variable x is: ' + x);
	x = 5;
	console.log( 'The value of variable x is: ' + x);

	return '-';
}

/* ================================================================= */
/* ====== ARITHMETIC OPERATORS ===================================== */
/* ================================================================= */
/*   +   -   *   /   %   **   */


/* ================================================================= */
/* ====== INCREMENT AND DECREMENT OPERATORS ======================== */
/* ================================================================= */
/*   ++x   x++   --x   x--   */




