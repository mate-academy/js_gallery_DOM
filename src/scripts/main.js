'use strict';

const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (evt) => {
  const target = evt.target;
  let link;
  let url;
  const bigImageEl = document.querySelector('#largeImg');

  if (target.tagName === 'IMG') {
    link = target.closest('a') || target.parentElement;
  } else if (target.tagName === 'A') {
    link = target;
  }

  if (link) {
    url = link.getAttribute('href') || link.dataset.src;
  }

  if (link && link.tagName === 'A') {
    evt.preventDefault();
  }

  if (url) {
    bigImageEl.src = url;
  }
});
