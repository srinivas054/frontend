document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('right-aligned-logos');
    images.forEach(function(image) {
        image.style.cssFloat = "right";  
        image.style.marginLeft = "10px"; 
    });
});
