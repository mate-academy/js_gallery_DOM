'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', (ev) => {
  const imgLink = ev.target.closest('.list-item__link');

  if (imgLink) {
    ev.preventDefault();

    largeImg.src = imgLink.href;
    largeImg.alt = imgLink.title;
  }
});
