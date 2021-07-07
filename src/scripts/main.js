'use strict';

const mainImg = document.getElementById('largeImg');
const gallery = document.getElementById('thumbs');

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  const imgLink = event.target.closest('.list-item__link');

  mainImg.src = imgLink.href;
});
