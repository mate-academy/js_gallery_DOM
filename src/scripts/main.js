'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.onclick = (e) => {
  if (!e.target.closest('a')) {
    return;
  };

  e.preventDefault();

  const link = e.target.closest('a').href;

  largeImg.src = link;
};
