'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const gallery = document.querySelector('.gallery__list');

gallery.addEventListener('click', function(e) {
  e.preventDefault();

  const src = e.target.tagName === 'IMG'
    ? e.target.parentNode.getAttribute('href')
    : e.target.getAttribute('href');

  mainImg.src = src;
});
