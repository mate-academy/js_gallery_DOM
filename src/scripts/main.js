'use strict';

const gallery = document.querySelector('.gallery__list');
const largeImage = document.querySelector('.gallery__large-img');

if (gallery && largeImage) {
  gallery.addEventListener('click', (e) => {
    e.preventDefault();

    const linkHref = e.target
      .closest('.list-item')
      .querySelector('.list-item__link').href;

    largeImage.setAttribute('src', linkHref);
  });
}
