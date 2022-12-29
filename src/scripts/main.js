'use strict';

const ul = document.querySelector('ul');
const img = document.querySelector('#largeImg');
const eventName = 'click';

const func = (action) => {
  action.preventDefault();

  if (action.target.tagName === 'IMG') {
    img.src = action.target.src;
    img.style.height = '348px';
  }
};

ul.addEventListener(eventName, func);
