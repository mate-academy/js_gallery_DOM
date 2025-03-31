'use strict';

document.getElementById('thumbs').addEventListener('click', function (ev) {
  ev.preventDefault(); // Запобігаємо переходу за посиланням

  const target = ev.target;

  // Якщо клікнули на <img>, беремо його батьківський <a>
  if (target.tagName === 'IMG') {
    const link = target.closest('a'); // Знаходимо <a>, якщо клік був по <img>

    if (link) {
      const largeImg = document.getElementById('largeImg');

      largeImg.src = link.href; // Міняємо головне зображення
      largeImg.alt = link.title; // Оновлюємо alt
    }
  }
});
