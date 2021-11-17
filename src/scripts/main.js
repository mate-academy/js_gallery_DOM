
'use strict';

const thumbs = document.body.querySelector('#thumbs');

const clickHandler = (e) => {
  e.preventDefault();

  const tag = e.target.tagName;

  if (tag === 'IMG' || tag === 'A') {
    const link = e.target.closest('.list-item__link');

    if (thumbs.contains(link)) {
      const largeImg = document.body.querySelector('#largeImg');

      largeImg.src = link.href;
    }
  }
};

thumbs.addEventListener('click', clickHandler);
