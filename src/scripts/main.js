'use strict';

const gallery = document.querySelector('.gallery');
const largeImg = document.getElementById('largeImg');

function mainImage(e) {
  e.preventDefault();

  const thumb = e.target.closest('.gallery__thumb');

  const link = thumb.parentElement;
  const newSrc = link.getAttribute('href');

  largeImg.src = newSrc;
}

gallery.addEventListener('click', mainImage);
