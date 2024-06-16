'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function (evt) {
  evt.preventDefault();

  const target = evt.target.closest('.list-item');

  if (target) {
    const img = target.querySelector('a');

    if (img) {
      const imgUrl = img.getAttribute('href');
      const imgAlt = img.getAttribute('title');

      largeImg.setAttribute('src', imgUrl);
      largeImg.setAttribute('alt', imgAlt);
    }
  }
});
