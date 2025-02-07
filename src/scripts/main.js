'use strict';

const link = [...document.querySelectorAll('.list-item__link')];

link.forEach((item) => {
  const imageLink = item.getAttribute('href');

  item.parentElement.style.boxSizing = 'border-box';

  item.addEventListener('click', (e) => {
    e.preventDefault();

    const galleryImage = document.getElementById('largeImg');

    if (imageLink) {
      galleryImage.setAttribute('src', imageLink);
    }
  });
});
