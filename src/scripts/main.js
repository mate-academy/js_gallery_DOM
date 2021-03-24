'use strict';

const list = document.getElementById('thumbs');
const mainImg = document.querySelector('.gallery__large-img');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const newSrc = e.target.parentElement.getAttribute('href');
  mainImg.setAttribute('src', newSrc);
});
