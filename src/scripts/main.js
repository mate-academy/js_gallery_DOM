'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  const thumb = e.target.closest('a');

  largeImg.setAttribute('src', thumb.href);
  largeImg.setAttribute('alt', thumb.title);
});
