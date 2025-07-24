'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');
const base = window.location.origin;

thumbs.addEventListener('click', function (eventMouse) {
  eventMouse.preventDefault();

  // Знаходимо <a> незалежно від того, клік був на <img> чи на <a>
  const link = eventMouse.target.closest('a');

  // Перевіряємо, чи дійсно клікнули на мініатюру
if (!link || link.closest('#thumbs') !== thumbs) return;

  const imgSrc = link.getAttribute('href');
  const imgAlt = link.getAttribute('title');

  // Змінюємо src і alt головного зображення
  largeImg.src = base + imgSrc;
  largeImg.alt = imgAlt;
});
