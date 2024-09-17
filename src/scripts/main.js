'use strict';

const fullList = document.querySelector('.gallery__list');
const listImg = document.getElementById('largeImg');

const changeImg = (myEevent) => {
  myEevent.preventDefault();

  const way = myEevent.target.parentElement.href;

  listImg.setAttribute('src', way);
};

fullList.addEventListener('click', changeImg);
