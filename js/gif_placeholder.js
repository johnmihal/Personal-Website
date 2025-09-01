
// This code only shows the gif after it has finished loading for the star coupler

// Wait until the browser has parsed the image element
document.addEventListener("DOMContentLoaded", () => {
const img = document.getElementById("star-coupler-img");
if (!img) return console.error("No element with ID star-coupler-img found.");

// Preload the GIF
const gif = new Image();
gif.onload = () => {
    img.src = gif.src;  // swap placeholder -> GIF
    console.log("GIF loaded successfully!");
};
gif.onerror = (e) => {
    console.error("Failed to load GIF:", img.dataset.gif, e);
};
gif.src = img.dataset.gif;  // start loading GIF
});