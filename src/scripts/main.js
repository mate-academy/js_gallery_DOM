'use strict';

const container = document.querySelector('#thumbs');
const largePicture = document.querySelector('#largeImg');

if (container && largePicture) {
  container.addEventListener('click', (e) => {
    const link = e.target.closest('a');

    if (!link) {
      return;
    }
    e.preventDefault();

    const url = link.getAttribute('href');

    if (url) {
      largePicture.src = url;
    }

    const prev = container.querySelector('.active');

    if (prev) {
      prev.classList.remove('active');
    }

    const item = link.closest('li') || link;

    item.classList.add('active');
  });
}
