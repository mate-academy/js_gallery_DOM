'use strict';

const thumbsList = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbsList.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  if (!thumbsList.contains(link)) {
    return;
  }

  e.preventDefault();

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
