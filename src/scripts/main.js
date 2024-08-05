'use strict';

const imgDiv = document.querySelector('#largeImg');
const ul = document.querySelector('ul');

function changeImage(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
    e.preventDefault();

    const necessaryA = e.target.closest('a');
    const newSrc = necessaryA.getAttribute('href');

    imgDiv.setAttribute('src', newSrc);
  }
}

ul.addEventListener('click', changeImage);
