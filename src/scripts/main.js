'use strict';

const mainImg = document.querySelector('#largeImg');
const pictures = document.querySelector('#thumbs');

pictures.addEventListener('click', function (e) {
  e.preventDefault();

  const target = e.target.closest('a');

  if (!target) {
    return;
  }

  mainImg.src = target.href;
  mainImg.alt = target.title;
});
