'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // знаходжу основений клас(обгортку)
  const gallery = document.querySelector('#thumbs');
  const mainImage = document.querySelector('#largeImg');

  gallery.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target;

    // перевіряю чи клік був на img чи a
    if (target.tagName === 'IMG' && target.parentElement.tagName === 'A') {
      if (mainImage) {
        const newSrc = target.parentElement.getAttribute('href');

        mainImage.setAttribute('src', newSrc); // міняю основне зображення
      }
    }
  });
});
