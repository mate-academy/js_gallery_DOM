'use strict';

const img = document.querySelector('.gallery__large-img');
const thumbImgList = document.querySelector('.gallery__list');

thumbImgList.addEventListener('click', ev => {
  ev.preventDefault();

  img.src = ev.target.closest('.list-item__link').href;
});
