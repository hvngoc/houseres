document.addEventListener("DOMContentLoaded", function() {
    // Select all images with the class 'zoomable-image'
    const images = document.querySelectorAll(".zoomable-image");

    images.forEach(function(image) {
        // Add click event listener to each image
        image.addEventListener("click", function() {
            openModal(this.src);
        });
    });
});

let scale = 1;
let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;

// Open the Modal
function openModal(src) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const modalContentContainer = document.querySelector(".modal-content-container");

    modal.style.display = "flex";
    modalImg.src = src;
    
    scale = 1; // Reset scale
    modalImg.style.transform = `scale(${scale})`;
    modalContentContainer.scrollLeft = 0;
    modalContentContainer.scrollTop = 0;

    // Handle dragging
    modalContentContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - modalContentContainer.offsetLeft;
        startY = e.pageY - modalContentContainer.offsetTop;
        scrollLeft = modalContentContainer.scrollLeft;
        scrollTop = modalContentContainer.scrollTop;
    });

    modalContentContainer.addEventListener("mouseleave", () => {
        isDragging = false;
    });

    modalContentContainer.addEventListener("mouseup", () => {
        isDragging = false;
    });

    modalContentContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - modalContentContainer.offsetLeft;
        const y = e.pageY - modalContentContainer.offsetTop;
        const walkX = (x - startX) * 1; // Adjust for faster/slower scrolling
        const walkY = (y - startY) * 1;
        modalContentContainer.scrollLeft = scrollLeft - walkX;
        modalContentContainer.scrollTop = scrollTop - walkY;
    });
}

// Close the Modal
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Zoom In
function zoomIn() {
    const modalImg = document.getElementById("modalImage");
    scale += 0.1;
    modalImg.style.transform = `scale(${scale})`;
}

// Zoom Out
function zoomOut() {
    const modalImg = document.getElementById("modalImage");
    scale -= 0.1;
    if (scale < 0.1) scale = 0.1; // Prevent zooming out too far
    modalImg.style.transform = `scale(${scale})`;
}
