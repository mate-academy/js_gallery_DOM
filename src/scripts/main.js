'use strict';
const largeImg = document.getElementById('largeImg');
const galleryList = document.getElementById('thumbs');

galleryList.addEventListener('click', e => {
  const link = e.target.closest('a');

  e.preventDefault();
  largeImg.src = link.href;
});

galleryList.addEventListener('mouseover', e => {
  if (e.target.tagName === 'IMG') {
    e.target.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  }
});

galleryList.addEventListener('mouseout', e => {
  if (e.target.tagName === 'IMG') {
    e.target.style.boxShadow = '';
  }
});