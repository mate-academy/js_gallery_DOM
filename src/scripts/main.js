document.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.querySelector('#largeImg');
  const thumbs = document.querySelector('#thumbs');

  const handleThumbnailClick = (e) => {
    e.preventDefault();

    const target = e.target.closest('a');

    if (target) {
      const newImgSrc = target.getAttribute('href');

      updateMainImage(newImgSrc);
    }
  };

  const updateMainImage = (src) => {
    largeImg.setAttribute('src', src);
  };

  thumbs.addEventListener('click', handleThumbnailClick);
});
