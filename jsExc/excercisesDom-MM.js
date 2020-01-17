document.addEventListener("DOMContentLoaded", executeAfterPageLoads);
let jsTestBtn01 = document.getElementById('jsTestBtn01');
let currentColor = 'red';

function executeAfterPageLoads()
{
    console.log('general function is started');
    // setTimeout(functionCalledAfterTenSeconds, 10000);
    // setInterval(functionCalledEachFiveSeconds, 5000);
    setInterval(switchColor, 3000);
}

function functionCalledAfterTenSeconds()
{
    console.log('Ten seconds have passed');
}

function functionCalledEachFiveSeconds()
{
    console.log('Five seconds have passed');
}

function switchColor()
{
    if (currentColor === 'red')  currentColor = 'green';
    else                         currentColor = 'red';
    jsTestBtn01.style.backgroundColor = currentColor;
}

