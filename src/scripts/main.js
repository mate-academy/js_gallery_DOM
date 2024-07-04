'use strict';

const gallery = document.querySelector('.gallery');
const mainImg = gallery.querySelector('.gallery__large-img');
const listOfThumbs = gallery.querySelectorAll('.gallery__thumb');

gallery.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.classList.contains('gallery__large-img')) {
    for (let i = 0; i < listOfThumbs.length; i += 1) {
      const thumb = listOfThumbs[i];

      if (thumb.parentElement.href === mainImg.src) {
        const nextThumb = listOfThumbs[i + 1];

        if (nextThumb) {
          const linkPath = nextThumb.parentElement.href;

          mainImg.src = linkPath;
        } else {
          const linkPath = listOfThumbs[0].parentElement.href;

          mainImg.src = linkPath;
        }

        break;
      }
    }
  }

  if (e.target.classList.contains('gallery__thumb')) {
    for (const thumb of listOfThumbs) {
      if (thumb === e.target) {
        const link = thumb.parentElement.href;

        mainImg.src = link;
        break;
      }
    }
  }
});
