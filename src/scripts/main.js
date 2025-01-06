'use strict';

const gallary = document.querySelector('.gallery__list');
const largeImg = document.querySelector('.gallery__img');

gallary.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  const largeImgUrl = link.getAttribute('href');

  largeImg.src = largeImgUrl;

  document.querySelectorAll('.list-item__link').forEach((item) => {
    item.classList.remove('active');
  });

  link.classList.add('active');
});
