'use strict';

const pictureContainer = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

pictureContainer.addEventListener('click', (ev) => {
  const imgLink = ev.target.closest('.list-item__link');

  if (imgLink) {
    ev.preventDefault();

    const newLargeImg = imgLink.getAttribute('href');
    const oldImg = imgLink.querySelector('img');

    largeImg.setAttribute('src', newLargeImg);

    if (oldImg.getAttribute('alt')) {
      largeImg.setAttribute('alt', oldImg.getAttribute('alt'));
    }
  }
});
