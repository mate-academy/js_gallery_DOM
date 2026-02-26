'use strict';

const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

if (thumbs && largeImg) {
  thumbs.addEventListener('click', function (evt) {
    const target = evt.target;
    const link = target.closest('a');

    if (!link || !thumbs.contains(link)) {
      return;
    }
    evt.preventDefault();

    const largeImgUrl = link.href;

    if (!largeImgUrl) {
      return;
    }

    largeImg.src = largeImgUrl;
  });
}
