/*  
    Javascripts Basics Tutorial
*/

let textValue = "Hello World";
const headingelement = document.querySelector('h1');
headingelement.textContent = textValue;

const imageelement = document.querySelector('img');
//imageelement.style.display = "none";
imageelement.classList.add('gone');
