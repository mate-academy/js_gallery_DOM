const mainImg = document.querySelector('#largeImg');
const galleryImg = document.querySelectorAll('.gallery__thumb');

galleryImg.forEach((image) => {
  image.addEventListener('click', (e) => {
    e.preventDefault();

    const newSrc = e.currentTarget.parentNode.href;

    mainImg.src = newSrc;
  });
});
