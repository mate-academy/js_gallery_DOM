'use strict';

const largeImage = document.querySelector('#largeImg');

document.querySelectorAll('.list-item').forEach((li) => {
  li.addEventListener('click', (e) => {
    e.preventDefault();

    const targetImage = e.target.closest('a').href;

    largeImage.src = targetImage;
  });
});
