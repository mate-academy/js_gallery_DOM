'use strict';

const mainImage = document.querySelector('#largeImg');
const linksOfList = [...document.querySelectorAll('#thumbs .list-item__link')];

const changeMainImage = (evnt) => {
  evnt.preventDefault();

  if (!evnt.target.classList.contains('gallery__thumb')) {
    return;
  }

  mainImage.src = evnt.currentTarget.href;
};

linksOfList.map(link => {
  link.addEventListener('click', changeMainImage);
});
