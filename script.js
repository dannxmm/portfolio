document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});





const dynamicText = document.getElementById('dynamic-text');
const texts = ['graphic design','motion design', 'editorial', 'ui / ux', 'typography', 'photography']; 
let currentIndex = 0;

function changeText() {
    dynamicText.style.opacity = 0; 
    
    
    setTimeout(() => {
        dynamicText.textContent = texts[currentIndex];
        dynamicText.style.opacity = 1; 
        currentIndex = (currentIndex + 1) % texts.length;
    }, 1000); 
}


changeText();

setInterval(changeText, 3000);