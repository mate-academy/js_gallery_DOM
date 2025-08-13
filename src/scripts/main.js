'use strict';

// Функция для замены большой картинки
function getLargeImg(imageSrc) {
  const largeImg = document.getElementById('largeImg');

  largeImg.setAttribute('src', imageSrc);
}

// Поиск всех миниатюр
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  getLargeImg(link.href);
});
