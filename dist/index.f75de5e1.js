"use strict";
const largeImage = document.getElementById("largeImg");
document.getElementById("thumbs").addEventListener("mousedown", (ev)=>{
    const currentLink = ev.target.closest(".list-item__link");
    const currentImage = ev.target.closest(".gallery__thumb");
    if (currentImage) {
        currentLink.addEventListener("click", (e)=>{
            e.preventDefault();
        });
        const newSrc = ev.target.getAttribute("src");
        largeImage.setAttribute("src", `${newSrc}`);
    }
});

//# sourceMappingURL=index.f75de5e1.js.map
