'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  let link;

  if (e.target.tagName === 'IMG') {
    link = e.target.parentElement;
  } else {
    link = e.target;
  }

  const imageUrl = link.href;

  largeImg.src = imageUrl;
});
