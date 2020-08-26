'use strict';

const list = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

const setPicture = (event) => {
  event.preventDefault();
  mainImg.src = event.target.closest('.list-item__link');
};

list.addEventListener('click', setPicture);
