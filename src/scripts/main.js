'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const galleryList = document.querySelector('.gallery__list');

galleryList.addEventListener('click', (myEvent) => {
  myEvent.preventDefault();

  const img = myEvent.target.closest('.list-item__link');

  // but working without this, do I need to add it?
  if (!galleryList.contains(img)) {
    return;
  }
  //

  const imgUrl = img.getAttribute('href');

  mainImg.setAttribute('src', imgUrl);
});
