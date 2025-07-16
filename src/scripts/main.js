const gallery = document.querySelector('.gallery'); 
const largeImg = document.querySelector('#largeImg');

largeImg.setAttribute('src', '/images/landscape-first.png'); 

gallery.addEventListener('click', function(e) {
    const link = e.target.closest('.list-item__link');
    if (link) {
        e.preventDefault();
        const linkHref = link.getAttribute('href');
        
        largeImg.setAttribute('src', linkHref); 
    }
});