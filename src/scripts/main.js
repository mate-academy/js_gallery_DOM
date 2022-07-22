'use strict';

const root = document.querySelector('#largeImg');

const onClickHandler = (e) => {
  e.preventDefault();

  root.src = e.target.parentNode.href;
};

[...document.querySelectorAll('li')]
  .forEach(item => {
    item.addEventListener('click', onClickHandler);
  });
