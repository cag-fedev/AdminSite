const DONE = 4; // readyState 4 means the request is done.
const OK = 200; // status 200 is a successful return.
const ulMenu = document.getElementById('ulMenu');

window.onload = doTheAjaxCallAndPopulateUl;

/*
let loadUl = document.getElementById('loadUl');
loadUl.addEventListener('click', doTheAjaxCallAndPopulateUl);
*/

function doTheAjaxCallAndPopulateUl() {
    console.log('ajax call started');
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'js/menu.json');
	xhr.send(null);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				convertJsonToLi(ulMenu, xhr.responseText);
			} else {
				console.log('Error: ' + xhr.status);
			}
		}
	};
}

function convertJsonToLi(ulObj, jsonString) {
	const jsonObj = JSON.parse(jsonString);

	for (let i = 0; i < jsonObj.length; i++) {
        let currentLi = document.createElement('li');
        let currentA = document.createElement('a');
        currentA.innerText = jsonObj[i].label;
        currentA.setAttribute('href',jsonObj[i].url + '.html');
        if( jsonObj[i].url == pageTitle )
        {
            currentA.setAttribute('class','link-active');
        }
        
        currentLi.appendChild(currentA);
        ulObj.appendChild(currentLi);
    }
}