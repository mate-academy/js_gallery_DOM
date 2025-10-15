'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  if (!thumbs || !largeImg) {
    return;
  }

  thumbs.addEventListener('click', (targEvent) => {
    let target = targEvent.target;

    if (target.tagName === 'IMG') {
      const anchor = target.closest('a');

      if (!anchor) {
        return;
      }

      target = anchor;
    } else if (target.tagName !== 'A') {
      return;
    }

    targEvent.preventDefault();

    const href = target.getAttribute('href');

    if (!href) {
      return;
    }

    const absoluteHref = new URL(href, document.baseURI).href;
    const clickedImg = target.querySelector('img');
    const imgAlt = clickedImg?.getAttribute('alt');
    const title = target.getAttribute('title');

    largeImg.src = absoluteHref;
    largeImg.alt = imgAlt || title || '';

    thumbs
      .querySelectorAll('a')
      .forEach((link) => link.classList.remove('active'));

    target.classList.add('active');
  });
});
