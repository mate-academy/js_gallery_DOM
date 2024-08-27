'use strict';

const listItems = document.querySelectorAll('.list-item');
const largeImg = document.getElementById('largeImg');

const handler = (e) => {
  e.preventDefault();

  const clickedThumb = e.currentTarget;
  const newSrc = clickedThumb.querySelector('a').href;

  largeImg.src = newSrc;
};

listItems.forEach((item) => {
  item.addEventListener('click', handler);
});
