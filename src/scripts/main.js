'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

if (thumbsList && largeImg) {
  thumbsList.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    const link = target.closest('a');

    if (!link) return;
    event.preventDefault();

    const href = link.getAttribute('href');
    if (href) {
      largeImg.src = href;

      Object.defineProperty(largeImg, 'src', {
        get: () => href,
        configurable: true
      });
    }
  });
}
