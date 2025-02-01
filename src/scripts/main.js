'use strict';

document.getElementById('thumbs').addEventListener('click', function (e) {
  e.preventDefault();

  let target = e.target;

  if (target.tagName === 'IMG') {
    target = target.parentElement;
  }

  const mainImg = document.getElementById('largeImg');

  mainImg.src = target.href;

  mainImg.alt = target.title;
});
