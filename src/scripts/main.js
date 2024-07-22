'use strict';

const gallery = document.querySelector('.gallery');
const mainImg = document.querySelector('.gallery__large-img');

const clickHnadler = (event) => {
  event.preventDefault();

  const target = event.target;

  mainImg.src = target.parentNode.href;
};

gallery.addEventListener('click', clickHnadler);
