function test() {
	let x=5;
	console.log('il valore della variabile è ' + x +' '+'il tipo è '+typeof x);
	x=6;
	console.log('il valore della variabile è ' + x);
	x='CIAO'
	console.log('il valore della variabile è '+ x + ' '+ 'il tipo è '+typeof x);
	let y=2;
	let z=8;
	let a=y+z+x;
	console.log ('somma y+z+x '+a);
	a=x+z+y;
	console.log ('somma x+z+y '+a);
	a=z+x+y;
	console.log ('somma z+a+y '+a);
	let array = [1, 5, 9, 8];
	console.log (array[3]);
	let sommaelementi=array[1]+array[3];
	console.log (sommaelementi);
	let c=sommaelementi++;
	console.log(c);
	c=++sommaelementi;
	console.log(c);
	let radice;
	radice=Math.sqrt(c);
	console.log(radice);
	let d= array[3]+c;

}

function f09() {
	let x=9;
	if(x<10)
	{
console.log('x è minore di 10')
	}
	else {
		console.log('x è maggiore uguale 10');
	}
}

function f10(x) {
	if(x<10)
	{
console.log('x è minore di 10')
	}
	else {
		console.log('x è maggiore uguale 10');
	}
}

function f11(x) {
	switch(x) {
		case "a": 
			console.log('è una vocale');
			break;

		case "b":
			console.log('è una consonante');
			break;
			
	}
}

function f12() {

	for (let i = 0; i < 9; i++) {
		console.log(i);
		
	 }

}

function f13() {

	for (let i = 0; i < 9; i++) {
		console.log(i);
		if(i===3) console.log('ho trovato il numero 3');

	 }
}

function f14() {

	for (let i = 0; i < 9; i++) {
		if(i===3) break;
		console.log(i);
		
	 }
}

function f15() {

	for (let i = 0; i < 9; i++) {
		console.log(i);
		if(i===3) continue;
		
	 }
}

function f16() {

	for(let i=1; i<=20; i++) {
		let moduloB3=i%3;
        let moduloB5=i%5;
        
		if(moduloB3===0 && moduloB5===0)
		{
			console.log('trovato un numero con modulo 0 per 3 e per 5')
			console.log('l\'indice '+i+ ' ha modulo '+moduloB3);	
			console.log('l\'indice '+i+ ' ha modulo '+moduloB5);	
			break;
		}

	}
}
