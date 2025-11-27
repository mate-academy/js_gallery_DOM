'use strict';

const allPicture = document.querySelector('ul');

allPicture.addEventListener('click', (even) => {
  const link = even.target.closest('a');

  if (link) {
    even.preventDefault();

    const mainPicture = document.getElementById('largeImg');

    mainPicture.src = link.href;
  }
});
