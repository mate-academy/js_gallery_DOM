'use strict';

const ul = document.querySelector('#thumbs');

ul.addEventListener('click', () => {
  const thumbs = event.target.closest('a');

  showNail(thumbs.href);
  event.preventDefault();
});

let largeImg;

function showNail(href) {
  largeImg.src = href;
}
