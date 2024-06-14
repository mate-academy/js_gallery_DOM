'use strict';

window.addEventListener('DOMContentLoaded', setApp);

function setApp() {
  const gallery = document.querySelector('.gallery');
  const clickImgHandler = (e) => {
    const link = e.target.closest('.list-item__link');

    if (link) {
      e.preventDefault();

      const largeImg = document.getElementById('largeImg');
      const newSrc = link.getAttribute('href');

      largeImg.src = newSrc;
    }
  };

  gallery.addEventListener('click', clickImgHandler);
}
