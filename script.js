// LIFE Music reveal text
let lifeChange = document.getElementById('life-click');

function textReturn() {
    lifeChange.innerHTML = "Click to learn more!";
}

function changeText() {
    lifeChange.innerHTML = "A responsive landing page for a fictional music business.";
}

lifeChange.addEventListener('click', textReturn);
lifeChange.addEventListener('click', changeText);

