'use strict';

const imgListRef = document.querySelector('.gallery__list');
const largeImgRef = document.querySelector('#largeImg');

imgListRef.addEventListener('click', e => {
  e.preventDefault();

  const listItemLinkRef = e.target.closest('.list-item__link');
  const imgLink = listItemLinkRef.getAttribute('href');

  largeImgRef.src = imgLink;
});
