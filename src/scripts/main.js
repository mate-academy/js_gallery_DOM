'use strict';

const imageBig = document.querySelector('#largeImg');
const links = document.querySelectorAll('.list-item');

links.forEach(link => link.addEventListener('click', (ev) => {
  ev.preventDefault();

  const targetImgAttr = ev.target.parentElement;

  imageBig.setAttribute('src', targetImgAttr.getAttribute('href'));
}));
