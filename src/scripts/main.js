'use strict';
const mainPic = document.querySelector('.gallery__large-img');
const previewLinks = document.querySelectorAll('list-item__link');

for (const link of previewLinks) {
  link.addEventListener('click', (item) => {
    item.preventDefault();
    mainPic.src = link.href;
  });
}
