document.querySelector("#thumbs").addEventListener("click",function(e){e.preventDefault();var t=e.target.closest("a.list-item__link");if(t){var r=new URL(t.getAttribute("href"),window.location.origin);document.querySelector("#largeImg").setAttribute("src",r)}});
//# sourceMappingURL=index.c59dea11.js.map
