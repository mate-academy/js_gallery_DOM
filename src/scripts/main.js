'use strict';

const largeImg = document.getElementById('largeImg');
const imagesList = document.getElementById('thumbs');

imagesList.addEventListener('click', (ev) => {
  ev.preventDefault();

  const closestLink = ev.target.closest('.list-item__link');

  if (closestLink) {
    largeImg.src = closestLink.href;
  }
});

// links.forEach((link) => {
//   link.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     largeImg.src = link.href;
//   });
// });
