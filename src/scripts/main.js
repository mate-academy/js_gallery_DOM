'use strict';

const blockForImg = document.querySelector('#largeImg');

const gallery = document.querySelector('#thumbs');

gallery.addEventListener('click', (element) => {
  element.preventDefault();

  blockForImg.src = element.target.closest('.list-item__link').href;
});
