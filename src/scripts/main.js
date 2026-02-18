'use strict';

const largeImg = document.querySelector('#largeImg');
const gallery = document.querySelector('#thumbs');

if (gallery && largeImg) {
  gallery.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();

    const link = clickEvent.target.closest('a');

    if (!link) {
      return;
    }

    largeImg.src = link.href;
  });
}
