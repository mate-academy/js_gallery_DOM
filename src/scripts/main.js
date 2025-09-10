'use strict';

const largeImg = document.querySelector('body .gallery div #largeImg');
const ulImgs = document.querySelector('body .gallery .gallery__list');

if (
  ulImgs !== null &&
  typeof ulImgs !== 'undefined' &&
  largeImg !== null &&
  typeof largeImg !== 'undefined'
) {
  ulImgs.addEventListener('click', (evnt) => {
    if (evnt.target.localName !== 'img' && evnt.target.localName !== 'a') {
      return;
    }

    if (evnt.target.localName === 'img') {
      const linkToelem = evnt.target.closest('a');

      if (linkToelem) {
        evnt.preventDefault();
        largeImg.setAttribute('src', linkToelem.href);
      }
    } else {
      if (evnt.target.href) {
        evnt.preventDefault();
        largeImg.setAttribute('src', evnt.target.href);
      }
    }
  });
}
