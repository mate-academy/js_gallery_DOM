'use strict';

const mainImage = document.querySelector('.gallery__img');
const allImages = Array.from(document.querySelectorAll('.list-item'));

for (const image of allImages) {
  const imageLink = image.firstElementChild.getAttribute('href');

  image.addEventListener('click', (something) => {
    something.preventDefault();
    mainImage.setAttribute('src', imageLink);
  });
}
