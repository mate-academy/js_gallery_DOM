'use strict';

const gallery = document.getElementById('thumbs');
const imageMain = document.getElementById('largeImg');

gallery.addEventListener('click', (clikElem) => {
  clikElem.preventDefault();

  const element = clikElem.target.closest('.list-item__link');

  imageMain.src = element.href;
});
