/* eslint-disable */
'use strict';

const thumbs = document.querySelector('#thumbs');
const mainImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (event) => {
  // Знаходимо найближче посилання, якщо клік був усередині елемента
  const link = event.target.closest('.list-item__link');
  if (!link) return; // Якщо клік не по зображенню — нічого не робимо

  // Блокуємо стандартне перенаправлення тільки для посилань
  event.preventDefault();

  const largeImgUrl = link.getAttribute('href');
  if (!largeImgUrl) return; // якщо href не знайдено — вихід

  const thumbImg = link.querySelector('img');
  if (!thumbImg) return; // якщо зображення всередині посилання немає — вихід

  mainImg.src = largeImgUrl;
  if (thumbImg.alt !== undefined) {
    mainImg.alt = thumbImg.alt;
  }
});
