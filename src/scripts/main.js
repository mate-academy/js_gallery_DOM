'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

const changeLargeImage = (e) => {
  e.preventDefault();

  if (e.target.tagName === 'IMG') {
    const link = e.target.parentNode;
    const newUrlLink = link.href;

    largeImg.src = newUrlLink;
    largeImg.alt = link.title;
  }
};

thumbs.addEventListener('click', changeLargeImage);
