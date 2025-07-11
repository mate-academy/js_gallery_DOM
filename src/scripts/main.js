'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const mainImg = document.querySelector('.gallery__large-img');
  const listImgs = document.getElementById('thumbs');

  listImgs.addEventListener('click', function (ev) {
    if (ev) {
      ev.preventDefault();

      let link;

      if (ev.target.tagName === 'IMG') {
        link = ev.target.closest('a');
      } else {
        link = ev.target;
      }

      if (link && link.href) {
        mainImg.src = link.href;
      }
    }
  });
});
