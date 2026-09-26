const galleryUl = document.querySelector('.gallery__list');
const mainImage = document.querySelector('.gallery__large-img');

galleryUl.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('a');

  if (!link) {
    return;
  }

  mainImage.src = link.href;
});