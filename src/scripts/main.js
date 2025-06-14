'use strict';

function changeImage() {
  const thumb = document.querySelector('#thumbs');
  const largeImg = document.querySelector('#largeImg');

  thumb.addEventListener('click', (eventius) => {
    eventius.preventDefault();

    const li = eventius.target.closest('.list-item');

    if (!li) {
      return;
    }

    const link = li.querySelector('a');
    const image = link.querySelector('img');

    largeImg.src = link.href;
    largeImg.alt = image.alt;
  });
}

changeImage();
