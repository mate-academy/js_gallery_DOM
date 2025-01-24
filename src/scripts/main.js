'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (events) => {
  events.preventDefault();

  const link = events.target.closest('.list-item__link');

  if (link) {
    const newSrc = link.getAttribute('href');

    largeImg.setAttribute('src', newSrc);
  }
});
