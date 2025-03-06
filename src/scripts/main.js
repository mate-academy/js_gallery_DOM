'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  const bigImg = document.querySelector('.gallery__large-img');
  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  if (target.tagName === 'A') {
    bigImg.src = target.href;
  }
});
