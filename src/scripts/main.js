'use strict';

const largeImg = document.querySelector('#largeImg');
const list = document.querySelector('.gallery__list');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const element = e.target;

  if (element.tagName === 'A') {
    largeImg.src = getReference(element.firstElementChild.getAttribute('src'));
  } else {
    largeImg.src = getReference(element.getAttribute('src'));
  }
});

function getReference(str) {
  const idx = str.lastIndexOf('-');

  return `./images/${str.slice(0, idx)}.png`;
}
