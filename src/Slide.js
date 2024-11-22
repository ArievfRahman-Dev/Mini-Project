const slider = document.getElementById("menuSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const totalItems = document.querySelectorAll(
  "#menuSlider .flex-shrink-0"
).length;
const itemWidth = document.querySelector(
  "#menuSlider .flex-shrink-0"
).offsetWidth;

let currentIndex = 0;

// Function to move to the next slide
function moveNext() {
  currentIndex++;

  // If we reach the last image (index 10), we jump back to the first image
  if (currentIndex >= totalItems) {
    // Temporarily disable transition to avoid visible jump
    slider.style.transition = "none";
    currentIndex = 0; // Reset to first slide
    slider.style.transform = `translateX(0)`; // Move to the first slide immediately
    setTimeout(() => {
      slider.style.transition = "transform 0.3s ease-in-out"; // Re-enable transition after reset
    }, 50);
  } else {
    updateSliderPosition();
  }
}

// Function to move to the previous slide
function movePrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1; // Move to the last slide
  }
  updateSliderPosition();
}

// Function to update slider position based on current index
function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Event listeners for slider buttons
prevBtn.addEventListener("click", movePrev);
nextBtn.addEventListener("click", moveNext);

// Optional: Auto-slide every 3 seconds
setInterval(moveNext, 1000);

// Daftar gambar yang akan digunakan
const images = [
  "./asset/layyyyo.jpeg", // Gambar 1
  "./asset/layout.jpeg", // Gambar 2
];

let currentImageIndex = 0;

// Mendapatkan elemen gambar
const imageElement = document.getElementById("carousel-image");

// Fungsi untuk mengganti gambar
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length; // Perulangan gambar
  imageElement.src = images[currentImageIndex]; // Ganti gambar
}

// Ganti gambar setiap 3 detik
setInterval(changeImage, 3000);
