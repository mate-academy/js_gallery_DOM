'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (myEvent) => {
  myEvent.preventDefault();

  const imgLink = myEvent.target.closest('.list-item__link');

  const imgUrl = imgLink.getAttribute('href');

  mainImg.setAttribute('src', imgUrl);
});
