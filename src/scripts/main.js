'use strict';

const pictureList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
pictureList.addEventListener('click', (event) => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  if (item) {
    largeImg.src = item.href;
  }
});
