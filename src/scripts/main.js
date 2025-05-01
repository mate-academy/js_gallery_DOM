'use strict';

const mainImage = document.querySelector('#largeImg');

document.addEventListener('click', function (e) {
  let clickedImg;

  if (e.target.tagName === 'IMG') {
    clickedImg = e.target;
  } else if (e.target.tagName === 'A') {
    clickedImg = e.target.querySelector('img');
  }

  if (!clickedImg) {
    return;
  }

  const link = clickedImg.closest('a');

  if (link) {
    e.preventDefault();
    mainImage.src = link.href;
  }
});
