script.js
Who has access
N
System properties
Type
Javascript
Size
466 bytes
Storage used
466 bytes
Location
js
Owner
Nezam Uddin
Modified
Oct 19, 2022 by Nezam Uddin
Opened
Oct 26, 2022 by me
Created
Oct 22, 2022
No description
Viewers can download
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};