'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.querySelector('#largeImg');
  const imgList = document.querySelector('.gallery__list');

  imgList.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;
    const isImg = target.classList.contains('gallery__img');

    if (isImg) {
      const imgParentHref = target
        .closest('a.list-item__link')
        .getAttribute('href');

      largeImg.setAttribute('src', imgParentHref);
    }
  });
});
