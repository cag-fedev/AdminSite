function helloWorld() {
	console.log('Hello World!');

	return '-';
}

/* ================================================================= */
/* ====== (JS IS DYNAMICALLY TYPED) ================================ */
/* ================================================================= */


/* ====== VARIABILI E TIPI DI VARIABILI ============================ */

function f01() {
	let x = 4;
	console.log('The value of variable x is: ' + x);
	console.log('The type  of variable x is: ' + typeof x);

	let y = 'T E S T';
	console.log('The value of variable y is: ' + y);
	console.log('The type  of variable y is: ' + typeof y);

	let z = true;
	console.log('The value of variable z is: ' + z);
	console.log('The type  of variable z is: ' + typeof z);

	return '-';
}

function f02() {
	let x;
	console.log('The value of variable x is: ' + x);
	console.log('The type  of variable x is: ' + typeof x);

	return '-';
}

function f03() {
	let x = 1 / 0;
	console.log('The value of variable x is: ' + x);
	console.log('The type  of variable x is: ' + typeof x);

	return '-';
}

function f04() {
	let x = Math.sqrt(-1);
	console.log('The value of variable x is: ' + x);
	console.log('The type  of variable x is: ' + typeof x);

	return '-';
}

function f05() {
	let x = [10, 15, 40];
	console.log('The value of variable x[1] is: ' + x[0]);
	console.log('The type  of variable x[1] is: ' + typeof x[0]);
	console.log('The value of variable x[2] is: ' + x[1]);
	console.log('The type  of variable x[2] is: ' + typeof x[1]);
	console.log('The value of variable x[3] is: ' + x[3]);
	console.log('The type  of variable x[3] is: ' + typeof x[3]);

	// ATTENZIONE
	console.log('The type  of variable x is: ' + typeof x);

	return '-';
}

function f06() {
	let x = function () { let a = 2; };
	console.log('The value of variable x is: ' + x);
	console.log('The type  of variable x is: ' + typeof x);

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
	console.log('The type  of variable x is: ' + typeof x);

	x = 'T E S T';
	console.log('The type  of variable x is: ' + typeof x);

	x = true;
	console.log('The type  of variable x is: ' + typeof x);

	return '-';
}


/* ================================================================= */
/* ====== CONSTANTS ================================================ */
/* ================================================================= */

function f08() {
	const x = 4;
	console.log('The value of variable x is: ' + x);
	x = 5;
	console.log('The value of variable x is: ' + x);

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


/* ================================================================= */
/* ====== if else ================================================ */
/* ================================================================= */

function f09() {
	let x = 9;
	if (x < 10) {
		console.log('x è minore di 10')
	}
	else {
		console.log('x è maggiore uguale 10');
	}
}

function f10(x) {
	if (x < 10) {
		console.log('x è minore di 10')
	}
	else {
		console.log('x è maggiore uguale 10');
	}
}


/* ================================================================= */
/* ====== switch case ============================================== */
/* ================================================================= */

function f11(x) {
	switch (x) {
		case "a":
			console.log('è una vocale');
			break;

		case "b":
			console.log('è una consonante');
			break;

	}
}


/* ================================================================= */
/* ====== for - break - continue =================================== */
/* ================================================================= */

function f12() {
	for (let i = 0; i < 9; i++) {
		console.log(i);

	}

}

function f13() {
	for (let i = 0; i < 9; i++) {
		console.log(i);
		if (i === 3) console.log('ho trovato il numero 3');

	}
}

function f14() {
	for (let i = 0; i < 9; i++) {
		if (i === 3) break;
		console.log(i);

	}
}

function f15() {
	for (let i = 0; i < 9; i++) {
		console.log(i);
		if (i === 3) continue;

	}
}

function f16() {
	for (let i = 1; i <= 20; i++) {
		let moduloB3 = i % 3;
		let moduloB5 = i % 5;
		console.log('l\'indice ' + i + ' ha modulo ' + moduloB3);
		console.log('l\'indice ' + i + ' ha modulo ' + moduloB5);

		if (moduloB3 === 0 && moduloB5 === 0) {
			console.log('trovato un numero con modulo 0 per 3 e per 5')
			break;
		}

	}
}
