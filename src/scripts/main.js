'use strict';

const links = document.querySelectorAll('.list-item__link');
const bigImg = document.getElementById('largeImg');

links.forEach(element => {
  element.addEventListener('click', linkClick);
});

function linkClick(e) {
  bigImg.src = e.currentTarget.getAttribute('href');
  e.preventDefault();
}
