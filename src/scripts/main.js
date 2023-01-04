'use strict';

const smallImage = document.querySelector('#thumbs');
const bigImage = document.querySelector('#largeImg');

const a = (e) => {
  e.preventDefault();

  const picture
    = e.target.className === 'gallery__img gallery__thumb'
      ? e.target.parentElement.href
      : e.target.href;

  bigImage.src = picture;
};

smallImage.addEventListener('click', a);
