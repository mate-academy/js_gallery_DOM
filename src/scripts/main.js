'use strict';

const ulELement = document.querySelector('ul');
const imgElement = document.querySelector('div > img');

ulELement.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  imgElement.setAttribute('src', link.href);
});
