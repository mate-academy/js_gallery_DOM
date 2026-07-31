'use strict';

function initGallery() {
  const preview = document.querySelector('#largeImg');
  const list = document.querySelector('#thumbs');

  if (!preview || !list) {
    return;
  }

  list.addEventListener('click', (evt) => {
    evt.preventDefault();

    let link;

    if (evt.target.tagName === 'A') {
      link = evt.target;
    } else if (evt.target.classList.contains('gallery__img')) {
      link = evt.target.closest('a');
    }

    if (link) {
      preview.src = link.href;
    }
  });
}

initGallery();
