'use strict';

const gallery = document.querySelector('.gallery');
const mainImg = document.querySelector('.gallery__large-img');

const clickHnadler = (e) => {
  e.preventDefault();

  const target = e.target;

  mainImg.src = target.parentNode.href;
};

gallery.addEventListener('click', clickHnadler);
