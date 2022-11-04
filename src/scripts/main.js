'use strict';

const gallery = document.getElementById('thumbs');
const showImage = document.getElementById('largeImg');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  const image = e.target.closest('.list-item__link').getAttribute('href');

  showImage.setAttribute('src', image);
});
