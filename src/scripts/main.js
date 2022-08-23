'use strict';

const gallery = document.querySelector('.gallery__list');
const mainImg = document.querySelector('.gallery__large-img');

const changeImg = () => {
  event.preventDefault();

  const newLink = (link) => {
    return link.split('-', 2).join('-') + '.png';
  };

  mainImg.setAttribute(
    'src', '/images/' + newLink(event.target.getAttribute('src'))
  );
};

gallery.addEventListener('click', changeImg);
