'use strict';

const ul = document.body.querySelector('.gallery__list');
const bigImg = document.getElementById('largeImg');

ul.addEventListener('click', (bob) => {
  bob.preventDefault();

  const target = bob.target;

  if (target.tagName === 'IMG') {
    const valueSrc = target.getAttribute('src');

    bigImg.setAttribute('src', valueSrc);
  } else {
    const img = target.querySelector('img');

    if (img) {
      const valueSrc = img.getAttribute('src');

      bigImg.setAttribute('src', valueSrc);
    }
  }
});
