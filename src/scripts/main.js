const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (event) => {
  event.preventDefault();

  const target = event.target;

  let link;

  if (target.classList.contains('gallery__thumb')) {
    link = target.closest('a');
  } else if (target.classList.contains('list-item__link')) {
    link = target;
  } else {
    return;
  }

  largeImg.src = link.href;
  largeImg.alt = link.title;
});
