
let element01 = document.getElementById('jsTestBtn01');
let element02 = document.getElementById('jsTestBtn02');
let element03 = document.getElementById('jsTestBtn03');

element01.onclick = function () {
    console.log('Button 01 has been clicked.');
    return false;
};

element02.addEventListener('click', btn02ClickMgr)
function btn02ClickMgr() {
    console.log('Button 02 has been clicked.');
    return false;
};

element03.addEventListener('click', function (event) { btn03ClickMgr(event) })
function btn03ClickMgr(cstmEv) {
    cstmEv.preventDefault();
    console.log('Button 03 has been clicked.');
    return false;
};

//Ancore
let element04 = document.getElementById('Anchor01');
let element05 = document.getElementById('Anchor02');
let element06 = document.getElementById('Anchor03');

element04.onclick = function () {
    console.log('Anchor 01 has been clicked.');
    //return false;
};

element05.addEventListener('click', anchor02ClickMgr)
function anchor02ClickMgr() {
    console.log('Anchor 02 has been clicked.');
    return false;
};

element06.addEventListener('click', function (event) { anchor03ClickMgr(event) })
function anchor03ClickMgr(cstmEv) {
    cstmEv.preventDefault();
    console.log('Anchor 03 has been clicked.');
    return false;
};

document.onkeydown = function (event) {
    event = event || window.event;
    let pacman = document.getElementById('pacman');
    switch (event.key) {
        case 'ArrowLeft':
            console.log('left');
            moveLeft(pacman);
            break;

        case 'ArrowUp':
            console.log('up');
            moveUp(pacman);
            break;

        case 'ArrowRight':
            console.log('right');
            moveRight(pacman);
            break;

        case 'ArrowDown':
            console.log('down');
            moveDown(pacman);
            break;

        default: return;
    }
    event.preventDefault();
};

function moveDown(element) {
    var elStyle = window.getComputedStyle(element);
    var topValue = elStyle.getPropertyValue("top").replace("px", "");
    element.style.top = (Number(topValue) + 20) + "px";
}

function moveUp(element) {
    var elStyle = window.getComputedStyle(element);
    var topValue = elStyle.getPropertyValue("top").replace("px", "");
    element.style.top = (Number(topValue) - 20) + "px";
}

function moveRight(element) {
    var elStyle = window.getComputedStyle(element);
    var leftValue = elStyle.getPropertyValue("left").replace("px", "");
    element.style.left = (Number(leftValue) + 20) + "px";
}

function moveLeft(element) {
    var elStyle = window.getComputedStyle(element);
    var leftValue = elStyle.getPropertyValue("left").replace("px", "");
    element.style.left = (Number(leftValue) - 20) + "px";
}



