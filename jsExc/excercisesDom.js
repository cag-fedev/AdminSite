
let element01 = document.getElementById('jsTestBtn01');
let element02 = document.getElementById('jsTestBtn02');
let element03 = document.getElementById('jsTestBtn03');

element01.onclick = function() {
    console.log('Button 01 has been clicked.');
    return false;
};

element02.addEventListener('click', btn02ClickMgr)
function btn02ClickMgr() {
    console.log('Button 02 has been clicked.');
    return false;
};

element03.addEventListener('click', function(event) { btn03ClickMgr(event) } )
function btn03ClickMgr(cstmEv) {
    cstmEv.preventDefault();
    console.log('Button 03 has been clicked.');
    return false;
};