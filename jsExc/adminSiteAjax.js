const DONE = 4; // readyState 4 means the request is done.
const OK = 200; // status 200 is a successful return.
const ulMenu = document.getElementById('ulMenu');

/* ============================================================================ */
/* ======= CHIAMATA AJAX DI TEST ============================================== */
/* ============================================================================ */
let testAjax = document.getElementById('testAjax');
testAjax.addEventListener('click', doTheAjaxCall);

function doTheAjaxCall() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'menu.json');
	xhr.send(null);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				console.log(xhr.responseText); // in questo punto eseguo solo il log del contenuto ricevuto tramite ajax
			} else {
				console.log('Error: ' + xhr.status);
			}
		}
	};
}


/* ============================================================================ */
/* ======= CHIAMATA AJAX PER IL POPOLAMENTO DELL'UL =========================== */
/* ============================================================================ */
let loadUl = document.getElementById('loadUl');
loadUl.addEventListener('click', doTheAjaxCallAndPopulateUl);

function doTheAjaxCallAndPopulateUl() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'menu.json');
	xhr.send(null);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				convertJsonToLi(ulMenu, xhr.responseText); // in questo punto chiamo la funzione che esegue il popolamento dell'ul
			} else {
				console.log('Error: ' + xhr.status);
			}
		}
	};
}

// la funzione riceve il riferimento all'oggetto DOM ul
// e la stringa json ottenuta dalla chiamata ajax
function convertJsonToLi(ulObj, jsonString) {
	// JSON.parse converte la stringa json in una struttura dati javascript
	// (in questo caso un array di oggetti)
	const jsonObj = JSON.parse(jsonString);

	// il ciclo esegue il parsing della struttura jsonObj
	for (let i = 0; i < jsonObj.length; i++) {
		let currentLi = document.createElement('li'); // crea un oggetto DOM li
		currentLi.innerText = jsonObj[i].label;                // assegna all'oggetto DOM l'attributo label dell'oggetto json
		ulObj.appendChild(currentLi);                          // aggiunge l'oggetto DOM li all'oggetto ul
	}
}

