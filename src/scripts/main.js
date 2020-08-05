'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

const hendler = (event) => {
  event.preventDefault();
  mainImg.src = event.target.closest('.list-item__link').href;
};

list.addEventListener('click', hendler);
