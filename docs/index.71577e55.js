var e=document.querySelector(".gallery__list"),t=document.querySelector(".gallery__large-img");e.addEventListener("click",function(e){if(e.preventDefault(),["IMG","A"].includes(e.target.tagName)){var r="A"===e.target.tagName?e.target:e.target.closest("A");t.src=r.href}});
//# sourceMappingURL=index.71577e55.js.map
