"use strict";
const largeImage = document.getElementById("largeImg");
function ready() {
    const wrapper = document.getElementById("thumbs");
    wrapper.addEventListener("click", function(e) {
        e.preventDefault();
        const link = e.target.closest("a");
        if (!link) return;
        largeImage.setAttribute("src", link.href);
    });
}
document.addEventListener("DOMContentLoaded", ready);

//# sourceMappingURL=index.f75de5e1.js.map
