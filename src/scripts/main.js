'use strict';

const images = document.querySelector('.gallery ul');

images.addEventListener('click', (e) => {
  const link = e.target.closest('a');

  if (link) {
    e.preventDefault();

    const element = 'http://localhost:3001' + link.getAttribute('href');

    document.getElementById('largeImg').setAttribute('src', `${element}`);
  }
});
