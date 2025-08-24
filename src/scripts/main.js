'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('thumbs'); // список мініатюр
  const mainImage = document.getElementById('largeImg'); // головне зображення

  if (!gallery || !mainImage) {
    return;
  }

  gallery.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;
    let link;

    // Якщо клікнули безпосередньо по <img>
    if (target.tagName === 'IMG') {
      link = target.closest('a'); // знайдемо батьківське посилання
    }

    // Якщо клікнули по <a>
    if (target.tagName === 'A') {
      link = target;
    }

    if (link) {
      mainImage.src = link.href; // беремо велике зображення з href
    }
  });
});
