const defaultText = "Click to learn more!";
const showText = {
    "life-click": "A responsive landing page for a fictional music business. (Built with HTML5 & CSS3)",
    "trail-runners-click": "A homepage for a fictional running club. (Built with HTML5 & CSS3)",
    "piano-click": "A playable piano programmed with JavaScript. (HTML and CSS source code courtesy of Codecademy)",
    "angles-click": "A magazine layout using CSS grid. (HTML source code courtesy of Codecademy)"
}

Object.keys(showText).forEach( s => {
    document.getElementById(s).addEventListener('click', toggleText);
});

Object.keys(defaultText).forEach( h => {
    document.getElementById(h).addEventListener('click', toggleText);
});

function toggleText(event) {
    let element = event.target;
    element.innerHTML = element.innerHTML == defaultText ? showText[element.id] : defaultText;
};
